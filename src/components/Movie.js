import React from "react";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "./config";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import Movieinfo from "./Movieinfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
import Trailer from "./Trailer";
//Images
import noImage from "../images/no-image.jpg";
//Hook
import useMovieFetch from "../hooks/useMovieFetch";
//Routing
import { useParams } from "react-router";

const Movie = () => {
  const { movieId } = useParams();

  const { movie, error, loading } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb title={movie.title} />
      <Movieinfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      {movie.trailers.length && <Trailer trailers={movie.trailers} />}

      <Grid header="Actors">
        {movie.actors.map((actor) => {
          return (
            <Actor
              key={actor.id}
              id={actor.id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : noImage
              }
            />
          );
        })}
      </Grid>
    </>
  );
};
export default Movie;
