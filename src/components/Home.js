import React, { useState, useEffect } from "react";

//Image placeholder
import noImage from "../images/no-image.jpg";

import API from "./API.js";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState();

  const fetchData = async (page, searchTerm = "") => {
   
    try {
      setError(false);
      setLoading(true);
      const response = await API.fetchMovies(page, searchTerm);

      setMovies((prev) => ({
        ...response,
        results:
          page > 1
            ? [...prev.results, ...response.results]
            : [...response.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

 

  return (
    <div>
      Home Page
    </div>
  );
};

export default Home;
