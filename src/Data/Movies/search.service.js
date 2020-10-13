import { useMovieDispatch, useMovieState } from "../movies.consumer";

export const useSerchMovie = () => {
  const moviesState = useMovieState();
  const movieDispatch = useMovieDispatch();
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${moviesState.api_key}&query=`;
  const submitSearch = () => {
    if (moviesState.serchMovie !== "") {
      console.log(moviesState.page);
      fetch(SEARCH_API + moviesState.serchMovie + "&page=" + moviesState.page)
        .then((res) => res.json())
        .then((data) => {
          movieDispatch({
            type: "TOTAL_RESULT",
            value: data.total_pages,
          });
          movieDispatch({
            type: "FETCH_DATA",
            value: data.results,
          });
        });
    }
  };
  return { moviesState, movieDispatch, submitSearch };
};
