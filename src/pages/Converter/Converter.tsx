import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "../../components/Form";
import { ResultBox } from "../../components/ResultBox";

export function Converter() {
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  return (
    <Wrapper>
      <Form setIsShowResult={setIsShowResult} />
      <ResultBox isShown={isShowResult} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 20px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
`
