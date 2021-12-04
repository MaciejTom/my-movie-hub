import React from "react";

//CONFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from "./config";

//COMPONENTS
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import Movieinfo from "./Movieinfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

//IMAGE
import noImage from "../images/no-image.jpg";

//HOOK
import useMovieFetch from "../hooks/useMovieFetch";

//
import { useParams } from "react-router";

const Movie = () => {
  const { movieId } = useParams();

  const { movie, error, loading } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
 
  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <Movieinfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => {
          return <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noImage
            }
          />;
        })}
      </Grid>
    </>
  );
};
export default Movie;
