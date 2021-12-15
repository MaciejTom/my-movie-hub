import React from "react";

//REACT ROUTER
import { useParams } from "react-router-dom";

//HOOK
import useActorFetch from "../hooks/useActorFetch";

//COMPONENTS
import BreadCrumb from "./BreadCrumb";
import ActorInfo from "./ActorInfo";
import Spinner from "./Spinner";
import ActorSlider from "./ActorSlider";
import ActorFilms from "./ActorFilms";

export const ActorPage = () => {
  const { actorId } = useParams();

  const { actor, error, loading } = useActorFetch(actorId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;
  console.log(actor);
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
