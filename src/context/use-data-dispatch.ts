import React, {useContext} from 'react';
import { DataDispatchContext } from "../components/data-provider"

export function useDataDispatch() {
  const context = useContext(DataDispatchContext);

  if (context === undefined) {
    throw new Error('DataDispatchContext must be used withing a DataProvider');
  }

  return context;
}