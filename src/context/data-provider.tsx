import React, { FunctionComponent, useEffect, useState, createContext} from "react"
import { fetchData } from "../utils/cancelable-fetch"
import { transformRates } from "../utils/format/transform-rates"
import { currencyFetchParamsFactory } from "../utils/format/currency-fetch-params-factory"

// TODO: Refactor interfaces
export interface ContextStatus {
  loading?: boolean;
}
export interface ContextResults {
  results?: any[];
}

export interface Params {
  fromDate: Date;
  toDate: Date;
  baseCurrency: string;
  foreignCurrencies: string[];
}

interface ContextParams {
  params?: Params;
}

type ContextState = ContextStatus & ContextResults & ContextParams;

const initialState: ContextState = {
  loading: false,
  results: [],
  params: null
}
export const DataStateContext = createContext(initialState);
export const DataDispatchContext = createContext(null)

export const DataProvider: FunctionComponent<{ }> = (props) => {
  const [state, setState] =
    useState<ContextState>(initialState);

  useEffect(() => {
    if (state.params != null) {
      setState({ ...state, loading: true, results: []});

      (async (): Promise<void> => {

        const searchParams = currencyFetchParamsFactory(state.params);

        const [request] = fetchData(`https://api.exchangeratesapi.io/history?${searchParams}`)
        const response = await request;
        const body = await response.json();

        const rates = transformRates(body.rates);

        setState({...state, results: rates, loading: false })
      })();
    }

  }, [state.params]);


  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={setState}>
        {props.children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
};