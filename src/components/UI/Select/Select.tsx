import React, {  } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { RootState, ICurrencies } from "../../../store/reducer";
import { ISymbols } from './../../../store/reducer';

interface ISelectProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export function Select(props:ISelectProps) {
  const currencies = useSelector<RootState, ICurrencies>(state => state.currancies);
  const symbols = useSelector<RootState, ISymbols>(state => state.symbols);
  let options = symbols.symbols.map(symbol => {
    return <Option key={symbol} value={symbol}>{symbol}</Option>
  });
  
  return (
    <Wrapper>
      <Label htmlFor="id_select">Базовая валюта</Label>
      <StyledSelect id="id_select" value={currencies.base} onChange={props.handleChange}>
        {options}
      </StyledSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`

const StyledSelect = styled.select`
  width: fit-content;
  border: 2px solid black;
`
const Option = styled.option`
  color: #4172e7;
`