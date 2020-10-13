import React from "react";
import img from "../assets/best.jpg";
import Movie from "../Movies/movie/Movie";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Pagination from "@material-ui/lab/Pagination";
import { LinearProgress } from "@material-ui/core";
import { useBestFilm } from "../../Data/Movies/bestFilm.service";

const BestFilm = () => {
  const { movieDispatch, moviesState } = useBestFilm();

  return (
    <>
      <div>
        <img src={img} alt="front" className="img" />
        <div className="front_style">
          <h1 className="">Reference Film</h1>
          <h2>What is are the best movies from...</h2>
        </div>
        <div className="loadign">
          {moviesState.loading === false && <LinearProgress />}
        </div>

        <div className="body">
          <div className="title">
            <h1>What movies is Best in ?</h1>
          </div>

          <div className="date">
            <KeyboardDatePicker
              size="small"
              fullWidth
              autoOk
              inputVariant="outlined"
              variant="inline"
              views={["year"]}
              margin="normal"
              label="starting at"
              value={moviesState.BestFilmAt}
              onChange={(e) => {
                movieDispatch({
                  type: "HANDLE_CHANGE_DATE",
                  value: e,
                });
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
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
                movieDispatch({
                  type: "SET_PAGE",
                  value: page,
                });
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BestFilm;
