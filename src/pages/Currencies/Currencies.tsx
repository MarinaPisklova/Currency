import React, { useEffect } from "react";
import { AppDispatch, ICurrencies, RootState } from "../../store/reducer";
import { useDispatch, useSelector } from 'react-redux';
import { currensiesRequestAsync } from '../../store/reducer';
import styled from "styled-components";
import { Select } from "../../components/UI/Select";
import { CurrenciesList } from "../../components/CurrenciesList";

export function Currencies() {
  const currencies = useSelector<RootState, ICurrencies>(state => state.currancies);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(currensiesRequestAsync(currencies.base));
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    dispatch(currensiesRequestAsync(event.target.value));
  }

  return (
    <Wrapper>
      <Select handleChange={handleChange} />
      <CurrenciesList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 300px;
  margin: 0 auto;
  padding: 50px 20px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
`

