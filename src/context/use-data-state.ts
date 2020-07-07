import React, {useContext} from 'react';
import { DataStateContext } from "./data-provider"

export function useDataState() {
  const context = useContext(DataStateContext);

  if (context === undefined) {
    throw new Error('DataStateContext must be used within DataProvider')
  }

  return context;
}