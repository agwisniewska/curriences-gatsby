export function fetchData(url: string) {
  const abortController = new AbortController();

  // TODO: Add cancel request function

  return [fetch(url)];
}