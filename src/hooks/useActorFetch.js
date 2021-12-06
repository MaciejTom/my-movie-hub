import { useState, useEffect } from "react";

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
        // const video = await API.fetchVideo(movieID)
       
        // const trailers = video.results.filter(el => el.type == "Trailer" && el.site == "YouTube");
        // console.log(trailers)
   
        // const directors = credits.crew.filter((el) => el.job == "Director");
console.log(actorData)
        setActor({
          ...actorData,
           actorMovies,
           actorImages,
        
          // actors: credits.cast,
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

export default useActorFetch;
