export function cancellableFetch(url) {
  const abortController = new AbortController();

  return [
    fetch(url, { signal: abortController.signal }),
    () => abortController.abort()
  ];
}