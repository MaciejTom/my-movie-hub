import React, { useState, useEffect } from "react";

//COMPONENTS
import HeroImage from "./HeroImage";
import HeroSlider from "./HeroSlider";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

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
  const {
    movies,
    error,
    loading,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  const mostPopularFilm = movies.results[0];

  const threeTopFilms = movies.results.slice(0, 3);

  if (error) {
    return <div>Something went wrong...</div>;
  }
  console.log(threeTopFilms);

  return (
    <>
      {/* {!searchTerm && mostPopularFilm && (
        <HeroImage
          title={mostPopularFilm.title}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${mostPopularFilm.backdrop_path}`}
          text={mostPopularFilm.overview}
        />
      )} */}
      {!searchTerm && mostPopularFilm && (
        <HeroSlider threeTopFilms={threeTopFilms}
        loading={loading} />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : `Popular Movies`}>
        {movies.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            title={movie.title}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImage
            }
            movieID={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {movies.page < movies.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
