import { Params } from "../../components/data-provider"

function formatDate(date: Date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

export function currencyFetchParamsFactory({fromDate, toDate, baseCurrency, foreignCurrencies}: Params) {
  const symbols = foreignCurrencies.join(',');

  return [
    `start_at=${formatDate(fromDate)}`,
    `end_at=${formatDate(toDate)}`,
    `base=${baseCurrency}`,
    `symbols=${symbols}`
  ].join('&');
}