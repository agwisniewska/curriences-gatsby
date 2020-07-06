import React, { FunctionComponent, useEffect, useState, createContext} from "react"
import { fetchData } from "../utils/cancelable-fetch"
import { transformRates } from "../utils/transform-rates"
import { currencyFetchParamsFactory } from "../utils/currency-fetch-params-factory"

// TODO: Refactor interfaces
interface ContextStatus {
  loading?: boolean;
}
interface ContextResults {
  results?: any[];
}

interface Params {
  fromDate: Date;
  toDate: Date;
  baseCurrency: string;
  foreignCurrencies: string[];
}

interface ContextParams {
  params?: Params;
}

type ContextState = ContextStatus & ContextResults & ContextParams;

export interface IContext {
  state: ContextState;
  setState: Function;
}

export const Context = createContext<IContext | null>(null);

export const DataProvider: FunctionComponent<{ }> = (props) => {
  const [state, setState] =
    useState<ContextState>({ loading: true, results: [], params: null});

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
    <Context.Provider value={{state, setState}}>
      {props.children}
    </Context.Provider>
  );
};