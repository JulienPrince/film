import React from "react";
import "./Popular.css";
import img from "../../assets/1.jpg";
import Movie from "./movie/Movie";
import { useMovie } from "../../Data/Movies/movies.service";
import Pagination from "@material-ui/lab/Pagination";
import { LinearProgress } from "@material-ui/core";
import { useSerchMovie } from "../../Data/Movies/search.service";

const Popular = () => {
  const { moviesState, movieDispatch } = useMovie();
  const { submitSearch } = useSerchMovie();
  return (
    <div>
      <img src={img} alt="front" className="img" />
      <div className="front_style">
        <h1 className="">Reference Film</h1>
        <h2>Find your Favorit movie ...</h2>
      </div>
      <div className="loadign">
        {moviesState.loading === false && <LinearProgress />}
      </div>
      <div className="body">
        <h1>
          {moviesState.serchMovie ? "Resultat" : "The most popular movies"}
        </h1>
      </div>
      <div className="movie-container">
        {moviesState.films.length > 0 &&
          moviesState.films.map((movie) => (
            <Movie key={movie.id} {...movie} img={moviesState.img} />
          ))}
      </div>
      <div className="pagination">
        {moviesState.total_pages > 20 && (
          <Pagination
            page={moviesState.page}
            count={moviesState.total_pages}
            size="small"
            variant="outlined"
            onChange={(e, page) => {
              submitSearch();
              movieDispatch({
                type: "SET_PAGE",
                value: page,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Popular;
