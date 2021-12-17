import React, {useState} from "react";

//Components
import HeroSlider from "./HeroSlider";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
//Hooks
import useHomeFetch from "../hooks/useHomeFetch";
//Images
import noImage from "../images/no-image.jpg";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "./config";

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

  return (
    <>
      {!searchTerm && mostPopularFilm && (
        <HeroSlider threeTopFilms={threeTopFilms} loading={loading} />
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
