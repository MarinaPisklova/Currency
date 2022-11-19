import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "../AppRouter/AppRouter";
import Navbar from "../UI/Navbar/Navbar";
import { AppDispatch,ISymbols, RootState, symbolsRequestAsync } from "../../store/reducer";
import styled from "styled-components";
import { Loader } from "../UI/Loader";

const Conteiner = styled.div`
  height: 100vh;
  max-width: 1020px;
  padding: 10px 20px;
  margin: 0 auto;
`

export default function Content() {
  const dispatch = useDispatch<AppDispatch>();
  const symbols = useSelector<RootState, ISymbols>(state => state.symbols);

  useEffect(() => {
    dispatch(symbolsRequestAsync());
  }, []);

  return (
    <Conteiner>
      {
        symbols.loading
          ? <Loader color="#4172e7" size="100px" margintop="300px" />
          :
          (
            <>
              <Navbar />
              {
                symbols.error
                  ? <Error>Sorry! {symbols.error}</Error>
                  : <AppRouter />
              }
            </>
          )
      }
    </Conteiner >
  )
}

const Error = styled.div`
  margin-top: 50px;
  text-align: center;
  font-weight: 600;
  color: red;
`