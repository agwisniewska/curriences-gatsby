export function fetchData(url) {
  const abortController = new AbortController();

  // TODO: Add cancel request function

  return [fetch(url)];
}