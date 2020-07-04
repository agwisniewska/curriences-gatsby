import React, { FunctionComponent } from "react"
import { cancellableFetch } from "../utils/cancelable-fetch"

enum STATUS {
  LOADING= 'LOADING',
  ERROR = 'ERROR',
  LOADED = 'LOADED'
}

type ContextState =
  { status: STATUS.LOADING | STATUS.ERROR }
  | { status: STATUS.LOADED; results: []; cancelRequest: false };

const Context = React.createContext<ContextState | null>(null);

export const DataProvider: FunctionComponent<{ }> = (props) => {
  const [state, setState] =
    React.useState<ContextState>({ status: 'LOADING' });

  React.useEffect(() => {
    setState({ status: 'LOADING '});

    (async (): Promise<void> => {
      const [request, cancelRequest]  = cancellableFetch(`https://api.exchangeratesapi.io/`)
      
      const results = await request;

     setState({results})
    })();
  }, []);

  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  );
};