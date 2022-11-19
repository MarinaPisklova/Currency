import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content/Content";
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
  }

  body{
    background: #f8f8f8;
  }

  button{
      border: 0;
      margin: 0;
      padding: 0;
      cursor: pointer;
  }
`

export default function App() {
  return (
    <>
      <Global />
      <Provider store={store}>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </Provider>
    </>
  )
}
