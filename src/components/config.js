const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

export { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY };

// https://api.themoviedb.org/3/movie/popular?api_key=b7b239fc57b95047aaeec74f47f5ee93&language=en-US&page=1