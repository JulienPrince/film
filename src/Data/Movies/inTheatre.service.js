import { useEffect } from "react";
import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const useIntheatreMovie = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moviesState.dateDebut}&primary_release_date.lte=${moviesState.dateFin}&api_key=${moviesState.api_key}&page=${moviesState.page}`;

  useEffect(() => {
    if (moviesState.serchMovie === "") {
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

          if (moviesState.serchMovie !== "") {
            movieDispatch({
              type: "SET_PAGE",
              value: 1,
            });
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FEATURED_API]);

  return { moviesState, movieDispatch };
};
