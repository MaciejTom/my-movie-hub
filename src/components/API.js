import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from "./config.js";

const apiSettings = {
  fetchMovies: async (page, searchTerm) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideo: async (movieId) => {
    const videoEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(videoEndpoint)).json();
  },
  fetchActor: async (actorId) => {
    const actorEndpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(actorEndpoint)).json();
  },
  fetchActorMovies: async (actorId) => {
    const actorEndpoint = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}&language=en-US`;

    return await (await fetch(actorEndpoint)).json();
  },
  fetchActorImages: async (actorId) => {
    const actorEndpoint = `${API_URL}person/${actorId}/tagged_images?api_key=${API_KEY}&language=en-US`;

    return await (await fetch(actorEndpoint)).json();
  },
};
export default apiSettings;
