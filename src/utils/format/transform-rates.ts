interface Rates {
  [key: string]: string;
}

export function transformRates(rates: Rates) {

  if (rates) {
    return Object.keys(rates).map(key => ({ ...rates[key] }));
  }


  return [];
}