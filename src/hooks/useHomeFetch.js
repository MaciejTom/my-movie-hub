import { useState, useEffect } from "react";

//API
import API from "../components/API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(initialState);
 
  const fetchData = async (page, searchTerm = "") => {
  
    try {
      setError(false);
      setLoading(true);
      console.log(searchTerm)
      const response = await API.fetchMovies(page, searchTerm);
      console.log(response)
     
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
    fetchData(1, searchTerm);
    console.log("USE EFFECT")
   
  }, [searchTerm]);

  return { movies, loading, error, setSearchTerm, searchTerm };
};
