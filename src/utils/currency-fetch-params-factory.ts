
function formatDate(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

export function currencyFetchParamsFactory({fromDate, toDate, baseCurrency, foreignCurrencies}) {
  const symbols = foreignCurrencies.join(',');

  return [
    `start_at=${formatDate(fromDate)}`,
    `end_at=${formatDate(toDate)}`,
    `base=${baseCurrency}`,
    `symbols=${symbols}`
  ].join('&');
}