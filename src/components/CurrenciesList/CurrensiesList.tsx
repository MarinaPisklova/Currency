import React from "react";
import { useSelector } from 'react-redux';
import { Loader } from "../../components/UI/Loader";
import styled from "styled-components";
import { RootState, ICurrencies } from "../../store/reducer";

export function CurrenciesList() {
  const currencies = useSelector<RootState, ICurrencies>(state => state.currancies);
  const loading = useSelector<RootState, boolean>(state => state.currancies.loading);
  const error = useSelector<RootState, string>(state => state.currancies.error);

  let rates = Object.entries(currencies.rates).filter(rate => rate[0] != currencies.base)

  let curlist = rates.map(
    (rate, index) =>
      <Li
        color={index % 2 ? "white" : "rgba(65, 115, 231, 0.226)"}
        key={rate[0]}
      >
        1 {rate[0]} = {(1 / rate[1]).toFixed(2)} {currencies.base}
      </Li>
  );

  return (
    <div>
      {loading
        ? <Loader color="#4172e7" size="50px" />
        : (
          error
            ? <Error>{error}</Error>
            :
            <Ul>
              {curlist}
            </Ul>
        )
      }
    </div>
  )
}

const Ul = styled.ul`
  width: 100%;
  margin-top: 10px;
  list-style: none;
  font-weight: 500;
  text-align: center;
`
const Li = styled.li`
  line-height: 1.5;
  background-color: ${(props => props.color) || "white"};
`

const Error = styled.div`
  text-align: center; 
  color: red;
`

