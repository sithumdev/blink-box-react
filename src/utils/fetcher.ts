const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res);

export default fetcher;
