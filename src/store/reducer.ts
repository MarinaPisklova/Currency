import { converterRequestSuccess, setConverterRequest, SetConverterRequestAction, setConverterRequestError, SetConverterRequestErrorAction, SetConverterRequestSuccessAction, setCurrenciesRequest, SetCurrenciesRequestAction, setCurrenciesRequestError, SetCurrenciesRequestErrorAction, SetSymbolRequestSuccessAction, SET_CONVERTER_REQUEST, SET_CONVERTER_REQUEST_ERROR, SET_CONVERTER_REQUEST_SUCCESS, SET_CURRENCIES_REQUEST_SUCCESS, SET_CURRENCIES_REQUEST, SET_CURRENCIES_REQUEST_ERROR, SET_SYMBOL_REQUEST_SUCCESS, symbolRequestSuccess, SetCurrensiesRequestSuccessAction, currensiesRequestSuccess, setSymbolsRequest, setSymbolsRequestError, SET_SYMBOLS_REQUEST, SET_SYMBOLS_REQUEST_ERROR, SetSymbolsRequestAction, SetSymbolsRequestErrorAction } from "./actions";
import { AnyAction, Reducer, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import APIService from './../API/APIService';

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export interface IConverter {
  from: string,
  to: string,
  amount: number,
  result: number,
  loading: boolean,
  error: string
}

export interface IRate {
  [name: string]: number,
}

export interface ICurrencies {
  base: string,
  rates: IRate,
  loading: boolean,
  error: string
}

export interface ISymbols {
  symbols: string[],
  loading: boolean,
  error: string
}

export type RootState = {
  converter: IConverter,
  currancies: ICurrencies,
  symbols: ISymbols,
}

export const initialState: RootState = {
  converter: {
    loading: false,
    error: "",
    from: "",
    to: "",
    amount: 0,
    result: 0
  },
  currancies: {
    loading: false,
    error: "",
    base: "USD",
    rates: {},
  },
  symbols: {
    symbols: [],
    loading: false,
    error: "",
  }
}

type MyAction =
  SetSymbolsRequestAction |
  SetSymbolsRequestErrorAction |
  SetCurrenciesRequestAction |
  SetCurrenciesRequestErrorAction |
  SetConverterRequestAction |
  SetConverterRequestErrorAction |
  SetSymbolRequestSuccessAction |
  SetCurrensiesRequestSuccessAction |
  SetConverterRequestSuccessAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_SYMBOLS_REQUEST:
      return {
        ...state,
        symbols: {
          ...state.symbols,
          loading: true,
        }
      }
    case SET_SYMBOLS_REQUEST_ERROR:
      return {
        ...state,
        symbols: {
          ...state.symbols,
          error: action.error,
          loading: false,
        }
      }
    case SET_CURRENCIES_REQUEST:
      return {
        ...state,
        currancies: {
          ...state.currancies,
          loading: true,
        }
      }
    case SET_CURRENCIES_REQUEST_ERROR:
      return {
        ...state,
        currancies: {
          ...state.currancies,
          error: action.error,
          loading: false,
        }
      }
    case SET_CONVERTER_REQUEST:
      return {
        ...state,
        converter: {
          ...state.converter,
          loading: true,
        }
      }
    case SET_CONVERTER_REQUEST_ERROR:
      return {
        ...state,
        converter: {
          ...state.converter,
          error: action.error,
          loading: false,
        }
      }
    case SET_SYMBOL_REQUEST_SUCCESS:
      return {
        ...state,
        symbols: {
          ...state.symbols,
          symbols: action.symbols,
          loading: false,
        }
      }
    case SET_CURRENCIES_REQUEST_SUCCESS:
      return {
        ...state,
        currancies: {
          ...state.currancies,
          base: action.base,
          rates: action.rates,
          loading: false,
        }
      }
    case SET_CONVERTER_REQUEST_SUCCESS:
      return {
        ...state,
        converter: {
          ...state.converter,
          from: action.from,
          to: action.to,
          amount: action.amount,
          result: action.result,
          loading: false,
        }
      }
    default:
      return state;
  }
}

export const symbolsRequestAsync = (): ThunkAction<void, RootState, unknown, MyAction> => (dispatch, getState) => {
  dispatch(setSymbolsRequest());
  APIService.getSymbols()
    .then((resp) => {
      const symbolsData = resp.data;
      const symbols = Object.keys(symbolsData.symbols)
      dispatch(symbolRequestSuccess(symbols));
    })
    .catch((error) => {
      dispatch(setSymbolsRequestError(String(error)));
    })
}

export const currensiesRequestAsync = (base: string): ThunkAction<void, RootState, unknown, MyAction> => (dispatch, getState) => {
  dispatch(setCurrenciesRequest());
  APIService.getCurranciesByBase(base)
    .then((resp) => {
      const currenciesData = resp.data;
      const base = currenciesData.base;
      const rates = currenciesData.rates;
      dispatch(currensiesRequestSuccess(base, rates));
    })
    .catch((error) => {
      dispatch(setCurrenciesRequestError(String(error)));
    })
}

export const convertRequestAsync = (from: string, to: string, amount: number): ThunkAction<void, RootState, unknown, MyAction> => (dispatch, state) => {
  dispatch(setConverterRequest());
  APIService.getConvertionFromTo(from, to, amount)
    .then((resp) => {
      const converterData = resp.data;
      const result = converterData.result;
      dispatch(converterRequestSuccess(from, to, amount, result));
    })
    .catch((error) => {
      dispatch(setConverterRequestError(String(error)));
    })
}
