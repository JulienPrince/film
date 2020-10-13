import * as React from "react";
import produce from "immer";
import { dateToString } from "../utils/dateUtils";

const initialState = {
  serchMovie: "",
  currentMovie: null,
  page: 1,
  total_pages: 0,
  loading: false,
  films: [],
  BestFilmAt: new Date(),
  dateDebut: dateToString(new Date()),
  dateFin: dateToString(new Date()),
  img:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  api_key: process.env.REACT_APP_API,
};

const movieReducer = produce((draft, action) => {
  switch (action.type) {
    case "HANDEL_SERCH_MOVIE": {
      draft.serchMovie = action.value;
      break;
    }

    case "FETCH_DATA": {
      draft.films = action.value;
      break;
    }
    case "TOTAL_RESULT": {
      draft.total_pages = action.value;
      break;
    }
    case "SET_PAGE": {
      draft.page = action.value;
      break;
    }
    case "SET_CURRENT_MOVIE": {
      draft.currentMovie = action.value;
      break;
    }
    case "SET_LOADING": {
      draft.loading = action.value;
      break;
    }
    case "HANDLE_CHANGE_DATE_DEBUT": {
      draft.dateDebut = action.value;
      break;
    }
    case "HANDLE_CHANGE_DATE_FIN": {
      draft.dateFin = action.value;
      break;
    }
    case "HANDLE_CHANGE_DATE": {
      draft.BestFilmAt = action.value;
      break;
    }
    default:
      break;
  }
});

export const MovieDisaptchContext = React.createContext(undefined);
export const MovieStateContext = React.createContext(undefined);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(movieReducer, initialState);

  return (
    <MovieStateContext.Provider value={state}>
      <MovieDisaptchContext.Provider value={dispatch}>
        {children}
      </MovieDisaptchContext.Provider>
    </MovieStateContext.Provider>
  );
};
