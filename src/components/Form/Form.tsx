import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ErrorBox } from "../../components/ErrorBox";
import { Loader } from "../../components/UI/Loader";
import { AppDispatch, convertRequestAsync, IConverter, RootState } from "../../store/reducer";

export function Form({setIsShowResult}:{setIsShowResult: Dispatch<SetStateAction<boolean>>}) {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState<string>("");
  const [errorForm, setErrorForm] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const symbols = useSelector<RootState, string[]>(state => state.symbols.symbols);
  const converter = useSelector<RootState, IConverter>(state => state.converter)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    setDisabled(false);
    setErrorForm("");
    setIsShowResult(false);
  }

  function handleClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let arr = text.split(" ");
    if (arr.length != 4) {
      setErrorForm("Неверный формат ввода");
      setDisabled(true);
    }
    else {
      let amount = +arr[0];
      let from = arr[1].toUpperCase();
      let to = arr[3].toUpperCase();
      if (isNaN(amount)) {
        setErrorForm(`Ошибка в количестве`);
        setDisabled(true);
      }
      else if (!symbols.includes(from)) {
        setErrorForm(`${from} данной валюты нет`);
        setDisabled(true);
      }
      else if (!symbols.includes(to)) {
        setErrorForm(`${to} данной валюты нет`);
        setDisabled(true);
      }
      else {
        dispatch(convertRequestAsync(from, to, amount));
        setIsShowResult(true);
      }
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleClick}>
        <Input type="text" onChange={handleChange} error={errorForm}/>
        <Button disabled={disabled} type="submit">
          Convert
          {converter.loading
            &&
            <Loader />
          }
        </Button>
      </StyledForm>
      <ErrorBox error={errorForm} />
    </>
  )
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Input = styled.input<{error:string}>`
  width: 250px;
  padding: 2px 10px;
  background-color: #f3f3f3;
  border-color: ${props => props.error ? "red" : "#4172e7"};
  border-radius: 10px;
  line-height: 35px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 45px;
  padding: 2px 10px;
  margin-left: 10px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  background-color: #4172e7;
  box-shadow: 0 0 40px 40px #4172e7 inset, 0 0 0 0 #3498db;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;


  &:hover {
    box-shadow: 0 0 10px 0 #4172e7 inset, 0 0 10px 2px #3498db;
  }
`