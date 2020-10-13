import { useEffect } from "react";
import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const useBestFilm = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const dateBest = moviesState.BestFilmAt.getFullYear();
  const FEATURED_API = `  https://api.themoviedb.org/3/discover/movie?primary_release_year=${dateBest}&sort_by=vote_average.desc&api_key=${moviesState.api_key}&page=${moviesState.page}`;

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
