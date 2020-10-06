import React from "react";
import { NavLink } from "react-router-dom";
import { useSerchMovie } from "../../Data/Movies/search.service";
import "./header.css";

const Navbar = () => {
  const { movieDispatch, moviesState, submitSearch } = useSerchMovie();
  const value = moviesState.serchMovie;

  return (
    <>
      <header className="topbar">
        <NavLink to="/acceuil" className="topbar_logo">
          Refecence Movies
        </NavLink>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
          }}
        >
          <input
            className="search"
            value={value}
            onChange={(e) => {
              movieDispatch({
                type: "HANDEL_SERCH_MOVIE",
                value: e.target.value,
              });
            }}
            type="search"
            placeholder="Search ..."
          />
        </form>
        <nav className="topbar_nav">
          <NavLink to="/acceuil">Home</NavLink>
          <NavLink to="/theatres">In theatres</NavLink>
          <NavLink to="/bestmovies">Best Movie</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
