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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(initialState);
  const [isLoadingMore, setIsLoadingMore] = useState(false);


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
    setMovies(initialState)
    fetchData(1, searchTerm);
   
   
  }, [searchTerm]);

  useEffect(() => {
   if (!isLoadingMore) return;

   fetchData(movies.page + 1, searchTerm)
   setIsLoadingMore(false)
   
   
  }, [isLoadingMore, searchTerm, movies.page]);

  return { movies, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};
