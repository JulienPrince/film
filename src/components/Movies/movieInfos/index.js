import React from "react";
import { Typography } from "@material-ui/core";
import "./movieInfo.css";
import { Link, Redirect } from "react-router-dom";
import { useCurrentMovie } from "../../../Data/Movies/currentMovie.service";
import { useVote } from "../../../Data/Movies/voteMovie.Service";
const IMG_API = "http://image.tmdb.org/t/p/w1280";

const MovieInfo = () => {
  const { moviesState } = useCurrentMovie();
  const { setVoteClass } = useVote();

  return (
    <>
      {moviesState.currentMovie !== null ? (
        moviesState.currentMovie.map((movie) => (
          <div key={movie.id}>
            <div className="font_div">
              <img
                src={
                  movie.poster_path
                    ? IMG_API + movie.poster_path
                    : moviesState.img
                }
                alt="font"
                className="font"
              />
            </div>
            <div className="container">
              <div className="header_info">
                <img
                  src={
                    movie.poster_path
                      ? IMG_API + movie.poster_path
                      : moviesState.img
                  }
                  alt={movie.title}
                />
                <Typography variant="h1">{movie.title}</Typography>
              </div>
              <div className="content_info">
                <Typography>{movie.overview}</Typography>
                <div className="date_info">
                  <Typography variant="h5">Realease Date :</Typography>
                  <Typography variant="h6">{movie.release_date} </Typography>
                </div>
                <div className="popularity_info">
                  <Typography variant="h5">Populariter :</Typography>
                  <Typography variant="h6">{movie.popularity}</Typography>
                </div>
                <div className="note_info">
                  <Typography variant="h5">Note :</Typography>
                  <div
                    className={`note_infos_container tag ${setVoteClass(
                      movie.vote_average
                    )}`}
                  >
                    <Typography>{movie.vote_average}</Typography>
                  </div>
                </div>
                <div className="link">
                  <Link to="/acceuil" variant="outlined">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Redirect to="/acceuil" />
      )}
    </>
  );
};

export default MovieInfo;
