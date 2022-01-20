import React from "react";

//Routing
import { useParams } from "react-router-dom";
//Hooks
import useActorFetch from "../hooks/useActorFetch";
//Components
import BreadCrumb from "./BreadCrumb";
import ActorInfo from "./ActorInfo";
import Spinner from "./Spinner";
import ActorSlider from "./ActorSlider";
import ActorFilms from "./ActorFilms";
import Error from "./Error";

export const ActorPage = () => {
  const { actorId } = useParams();

  const { actor, error, loading } = useActorFetch(actorId);

  if (loading) return <Spinner />;
  if (error) return <Error/>;

  return (
    <div>
      <BreadCrumb title={actor.name} />
      <ActorInfo actor={actor} />
      {!!actor.actorImages.results.length && (
        <ActorSlider images={actor.actorImages.results} />
      )}
      <ActorFilms films={actor.actorMovies.cast} />
    </div>
  );
};

export default ActorPage;
