import { useState, useEffect } from "react";

//Proptypes
import PropTypes from "prop-types";
//Api functions
import API from "../components/API";

const useActorFetch = (actorId) => {
  const [actor, setActor] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(false);
        const actorData = await API.fetchActor(actorId);
        const actorMovies = await API.fetchActorMovies(actorId);
        const actorImages = await API.fetchActorImages(actorId);

        setActor({
          ...actorData,
          actorMovies,
          actorImages,
        });
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };

    fetchActor(actorId);
  }, [actorId]);
  return { actor, loading, error };
};

useActorFetch.propTypes = {
  actorId: PropTypes.number, 
};

export default useActorFetch;
