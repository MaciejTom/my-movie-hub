import { useState, useEffect } from "react";

import API from "../components/API";

const useMovieFetch = (movieID) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieData = await API.fetchMovie(movieID);
        const credits = await API.fetchCredits(movieID);
        const video = await API.fetchVideo(movieID)
       
        const trailers = video.results.filter(el => el.type == "Trailer" && el.site == "YouTube");
        console.log(trailers)
   
        const directors = credits.crew.filter((el) => el.job == "Director");

        setMovie({
          ...movieData,
          directors,
          trailers,
        
          actors: credits.cast,
        });
        setLoading(false);
      } catch (e) {
        setError(true);
      }
      
    };

    fetchMovie(movieID);
  }, [movieID]);
  return { movie, loading, error };
};

export default useMovieFetch;
