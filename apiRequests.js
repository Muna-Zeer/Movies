// apiRequests.js

async function fetchMoviesFromAPI(url) {
  const fetch = await import('node-fetch');
  const response = await fetch.default(url);
  const data = await response.json();
  return data;
}

module.exports = {
  fetchMoviesFromAPI,
};
