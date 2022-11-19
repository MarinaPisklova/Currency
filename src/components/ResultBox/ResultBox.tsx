import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IConverter, RootState } from "../../store/reducer";

export function ResultBox({ isShown }: { isShown: boolean }) {
  const converter = useSelector<RootState, IConverter>(state => state.converter)

  return (
    <>
      {
        !converter.loading &&
        isShown &&
        <StyledBox>
          {converter.amount} {converter.from} = {converter.result.toFixed(2)} {converter.to}</StyledBox>
      }
    </>
  )
}

const StyledBox = styled.div`
  font-weight:600;
  font-size: 20px;
  color: #333
`
