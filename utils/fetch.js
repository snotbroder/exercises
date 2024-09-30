export function fetchUrl(url) {
  return fetch(url).then((res) => res.json());
}
