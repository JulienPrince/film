import * as React from "react";
import { MovieDisaptchContext, MovieStateContext } from "./movies.context";

export const useMovieDispatch = () => {
  const context = React.useContext(MovieDisaptchContext);
  if (context === undefined) {
    throw new Error(
      "useMatiereDispatch must be used within a MovieDispatchProvider"
    );
  }
  return context;
};

export const useMovieState = () => {
  const context = React.useContext(MovieStateContext);
  if (context === undefined) {
    throw new Error("useMatiereState must be used within a MovieStateProvider");
  }
  return context;
};
