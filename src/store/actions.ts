import { ActionCreator } from "redux";
import { IRate } from './reducer';

export const SET_SYMBOLS_REQUEST = "START_SYMBOLS_REQUEST";
export type SetSymbolsRequestAction = {
  type: typeof SET_SYMBOLS_REQUEST;
}
export const setSymbolsRequest: ActionCreator<SetSymbolsRequestAction> = () => (
  { type: SET_SYMBOLS_REQUEST }
)

export const SET_SYMBOLS_REQUEST_ERROR = "SET_SYMBOLS_REQUEST_ERROR";
export type SetSymbolsRequestErrorAction = {
  type: typeof SET_SYMBOLS_REQUEST_ERROR;
  error: string
}
export const setSymbolsRequestError: ActionCreator<SetSymbolsRequestErrorAction> = (error) => (
  { type: SET_SYMBOLS_REQUEST_ERROR, error }
)

export const SET_CURRENCIES_REQUEST = "START_CURRENCIES_REQUEST";
export type SetCurrenciesRequestAction = {
  type: typeof SET_CURRENCIES_REQUEST;
}
export const setCurrenciesRequest: ActionCreator<SetCurrenciesRequestAction> = () => (
  { type: SET_CURRENCIES_REQUEST }
)

export const SET_CURRENCIES_REQUEST_ERROR = "SET_CURRENCIES_REQUEST_ERROR";
export type SetCurrenciesRequestErrorAction = {
  type: typeof SET_CURRENCIES_REQUEST_ERROR;
  error: string
}
export const setCurrenciesRequestError: ActionCreator<SetCurrenciesRequestErrorAction> = (error) => (
  { type: SET_CURRENCIES_REQUEST_ERROR, error }
)

export const SET_CONVERTER_REQUEST = "SET_CONVERTER_REQUEST";
export type SetConverterRequestAction = {
  type: typeof SET_CONVERTER_REQUEST;
}
export const setConverterRequest: ActionCreator<SetConverterRequestAction> = () => (
  { type: SET_CONVERTER_REQUEST }
)


export const SET_CONVERTER_REQUEST_ERROR = "SET_CONVERTER_REQUEST_ERROR";
export type SetConverterRequestErrorAction = {
  type: typeof SET_CONVERTER_REQUEST_ERROR;
  error: string
}
export const setConverterRequestError: ActionCreator<SetConverterRequestErrorAction> = (error) => (
  { type: SET_CONVERTER_REQUEST_ERROR, error }
)


export const SET_SYMBOL_REQUEST_SUCCESS = "SET_SYMBOL_REQUEST_SUCCESS";
export type SetSymbolRequestSuccessAction = {
  type: typeof SET_SYMBOL_REQUEST_SUCCESS;
  symbols: string[];
}
export const symbolRequestSuccess: ActionCreator<SetSymbolRequestSuccessAction> = (symbols) => (
  { type: SET_SYMBOL_REQUEST_SUCCESS, symbols }
)


export const SET_CURRENCIES_REQUEST_SUCCESS = "SET_CURRENCIES_REQUEST_SUCCESS";
export type SetCurrensiesRequestSuccessAction = {
  type: typeof SET_CURRENCIES_REQUEST_SUCCESS;
  base: string;
  rates: IRate;
}
export const currensiesRequestSuccess: ActionCreator<SetCurrensiesRequestSuccessAction> = (base, rates) => (
  { type: SET_CURRENCIES_REQUEST_SUCCESS, base, rates }
)

export const SET_CONVERTER_REQUEST_SUCCESS = "SET_CONVERTER_REQUEST_SUCCESS";
export type SetConverterRequestSuccessAction = {
  type: typeof SET_CONVERTER_REQUEST_SUCCESS;
  from: string;
  to: string;
  amount: number;
  result: number;
}

export const converterRequestSuccess: ActionCreator<SetConverterRequestSuccessAction> = (from, to, amount, result) => ({
  type: SET_CONVERTER_REQUEST_SUCCESS, from, to, amount, result
})


