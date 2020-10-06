import React from "react";
import "./Movie.css";
const IMG_API = "http://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average, img }) => {
  return (
    <div className="movie">
      <img src={poster_path ? IMG_API + poster_path : img} alt={title} />
      <div className="movi-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview : </h2>
        <p>{overview}</p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Movie;
