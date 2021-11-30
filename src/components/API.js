import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "./config.js";

const apiSettings = {
  fetchMovies: async (page, searchTerm) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
};
export default apiSettings;
