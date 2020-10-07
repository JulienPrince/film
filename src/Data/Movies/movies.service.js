import { useEffect } from "react";
import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const useMovie = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${moviesState.api_key}&page=${moviesState.page}`;
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        movieDispatch({
          type: "FETCH_DATA",
          value: data.results,
        });
        movieDispatch({
          type: "TOTAL_RESULT",
          value: data.total_pages,
        });
        movieDispatch({
          type: "SET_LOADING",
          value: true,
        });
      });
  }, [FEATURED_API, movieDispatch]);
  return { moviesState, movieDispatch };
};
