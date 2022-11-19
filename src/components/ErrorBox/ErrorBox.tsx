import React from "react";
import { useSelector } from "react-redux";
import { IConverter, RootState } from "../../store/reducer";

export function ErrorBox({ error }: { error: string }) {
  const converter = useSelector<RootState, IConverter>(state => state.converter)

  return (
    <>
      {
        error && <div>{error}</div>
      }
      {
        converter.error && <div>{converter.error}</div>
      }
    </>
  )
}
