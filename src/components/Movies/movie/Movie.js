import React from "react";
import { useCurrentMovie } from "../../../Data/Movies/currentMovie.service";
import "./Movie.css";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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

const Movie = ({ title, poster_path, overview, vote_average, img, id }) => {
  const { currentMovie } = useCurrentMovie();
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
        <div className="links">
          <Link
            to="movieinfos"
            onClick={() => {
              currentMovie(id);
            }}
          >
            Infos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
