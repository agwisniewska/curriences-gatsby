export function transformRates(rates) {

  if (rates) {
    debugger;

    return Object.keys(rates).map(key => ({ ...rates[key] }));
  }


  return [];
}