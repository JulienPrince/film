import React from "react";
import "./Theatre.css";
import img from "../assets/theatre.jpg";
import Movie from "../Movies/movie/Movie";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useIntheatreMovie } from "../../Data/Movies/inTheatre.service";
import { dateToString } from "../../utils/dateUtils";
import Pagination from "@material-ui/lab/Pagination";
import { LinearProgress } from "@material-ui/core";

const Theatres = () => {
  const { movieDispatch, moviesState } = useIntheatreMovie();
  return (
    <div>
      <img src={img} alt="front" className="img" />
      <div className="front_style">
        <h1 className="">Reference Film</h1>
        <h2>when the movie will be in theaters ...</h2>
      </div>
      <div className="loadign">
        {moviesState.loading === false && <LinearProgress />}
      </div>

      <div className="body">
        <div className="title">
          <h1>What movies are in theatres?</h1>
        </div>

        <div className="date">
          <KeyboardDatePicker
            size="small"
            fullWidth
            autoOk
            inputVariant="outlined"
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            label="starting at"
            value={moviesState.dateDebut}
            onChange={(e) => {
              movieDispatch({
                type: "HANDLE_CHANGE_DATE_DEBUT",
                value: dateToString(e),
              });
            }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            size="small"
            fullWidth
            autoOk
            inputVariant="outlined"
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            label="to"
            value={moviesState.dateFin}
            onChange={(e) => {
              movieDispatch({
                type: "HANDLE_CHANGE_DATE_FIN",
                value: dateToString(e),
              });
            }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
      </div>
      <div className="pagination">
        {moviesState.total_pages > 1 && (
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
      <div className="movie-container">
        {moviesState.films.length > 0 &&
          moviesState.films.map((movie) => (
            <Movie key={movie.id} {...movie} img={moviesState.img} />
          ))}
      </div>
      <div className="pagination">
        {moviesState.total_pages > 1 && (
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
  );
};

export default Theatres;
