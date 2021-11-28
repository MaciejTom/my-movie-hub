import React, { useState, useEffect } from "react";

//COMPONENTS
import { HeroImage } from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";

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

  const mostPopularFilm = movies.results[0];

  return (
    <>
      {mostPopularFilm && (
        <HeroImage
          title={mostPopularFilm.title}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${mostPopularFilm.backdrop_path}`}
          text={mostPopularFilm.overview}
        />
      )}
      <Grid header="Popular Movies">
        {movies.results.map((movie) => (
          <Thumb
            key={movie.id}
            title={movie.title}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;
