import React, { useState, useEffect } from "react";

//COMPONENTS
import { HeroImage } from "./HeroImage";

//HOOKS
import { useHomeFetch } from "../hooks/useHomeFetch";

//IMAGE
import noImage from "../images/no-image.jpg";

//API
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";

const Home = () => {
  const { movies, error, loading } = useHomeFetch();

  const mostPopularFilm = movies.results[0]
console.log(mostPopularFilm)
  return (
    <>
      {mostPopularFilm && (
        <HeroImage
          title={mostPopularFilm.title}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${mostPopularFilm.backdrop_path}`}
          text={mostPopularFilm.overview}
        />
      )}
    </>
  );
};

export default Home;
