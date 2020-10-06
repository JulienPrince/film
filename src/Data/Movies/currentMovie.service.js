import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const useSerchMovie = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const currentMovie = (id) => {
    const filterMovie = moviesState.films.filter((movie) => movie.id === id);
    const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null;
    movieDispatch({
      type: "SET_CURRENT_MOVIE",
      value: filterMovie,
    });
  };

  const closeMovieInfos = () => {
    movieDispatch({
      type: "SET_CURRENT_MOVIE",
      value: null,
    });
  };

  return { moviesState, movieDispatch, currentMovie, closeMovieInfos };
};
