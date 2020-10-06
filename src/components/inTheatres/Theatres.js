import React from "react";
import "./Theatre.css";
import img from "../../assets/1.jpg";
import { useMovie } from "../../Data/Movies/movies.service";
import Movie from "../Movies/movie/Movie";

const Theatres = () => {
  const { moviesState } = useMovie();
  return (
    <div>
      <img src={img} alt="front" className="img" />
      <div className="front_style">
        <h1 className="">Reference Film</h1>
        <h2>Find your Favorit movie ...</h2>
      </div>
      <div className="body">
        <h1>
          {moviesState.serchMovie ? "Resultat" : "What movies are in theatres?"}
        </h1>
        <div></div>
      </div>
      <div className="movie-container">
        {moviesState.films.length > 0
          ? moviesState.films.map((movie) => (
              <Movie key={movie.id} {...movie} img={moviesState.img} />
            ))
          : "a faire"}
      </div>
    </div>
  );
};

export default Theatres;
