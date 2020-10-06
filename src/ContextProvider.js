import * as React from "react";
import { MovieProvider } from "./Data/movies.context";

export const ContextProvider = ({ children }) => {
  return [MovieProvider].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};
