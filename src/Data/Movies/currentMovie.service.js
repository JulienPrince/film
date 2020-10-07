import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const useCurrentMovie = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const currentMovie = (id) => {
    const filterMovie = moviesState.films.filter((movie) => movie.id === id);
    movieDispatch({
      type: "SET_CURRENT_MOVIE",
      value: filterMovie,
    });
  };
  return { moviesState, movieDispatch, currentMovie };
};
