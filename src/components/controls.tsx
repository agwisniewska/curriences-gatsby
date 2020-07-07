import React, { ChangeEvent, useEffect } from "react"
import Checkbox from "./checkbox"
import { useDataState } from "../context/use-data-state"
import { useDataDispatch } from "../context/use-data-dispatch"

const currencies = ['USD', 'EUR', 'PLN', 'CHF', 'GBP'];

export function Controls<FunctionComponent>() {
  const state = useDataState();
  const setState = useDataDispatch();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({params: { ...state.params, baseCurrency: e.currentTarget.value }})
  }

  const updateCurrencies = (currency: string) => {

    const currencies = [...state.params.foreignCurrencies, currency];

    setState({params: {...state.params, foreignCurrencies: currencies}})
  }


  useEffect(() => {
    setState({params: {fromDate: new Date(2020, 1, 1), toDate: new Date(), baseCurrency: 'PLN', foreignCurrencies: ['USD', 'EUR']}})
  }, [])

  return (
    <>
      Chosen currencies:
      <label htmlFor="currencies"> Choose base currency </label>
      <select name="currencies" id="currencies" onChange={(e) => onChange(e)}>
        {currencies.map(currency => <option value={currency}> {currency} </option>)}
      </select>
      {currencies.map(currency =>
        <Checkbox checked={state && state.params &&
            state.params.foreignCurrencies.includes(currency)} id={currency} onChange={() => updateCurrencies(currency)}>
          {currency}
        </Checkbox>)
      }
    </>
  )
}