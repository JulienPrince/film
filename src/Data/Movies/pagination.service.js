import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const usePaginationMovies = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${moviesState.api_key}&query=`;
  const setPagination = (page) => {
    if (moviesState.serchMovie !== "") {
      fetch(
        SEARCH_API + moviesState.serchMovie + "&page=" + moviesState.currentPage
      )
        .then((res) => res.json())
        .then((data) => {
          movieDispatch({
            type: "FETCH_DATA",
            value: data.results,
          });
        });
    }
  };

  return { setPagination };
};
