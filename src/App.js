import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ContextProvider } from "./ContextProvider";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Theatres from "./components/inTheatres/Theatres";
import Popular from "./components/Movies/Popular";
import MovieInfo from "./components/Movies/movieInfos";
import BestFilm from "./components/bestFilm/BestFilm";
import Footer from "./components/footer/Footer";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#43456f",
    },
  },
});

function App() {
  return (
    <Router>
      <ContextProvider>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <React.Fragment>
              <Navbar />
              <main>
                <Switch>
                  <Redirect from="/" to="/acceuil" exact></Redirect>
                  <Route path="/acceuil" component={Popular} />
                  <Route path="/theatres" component={Theatres} />
                  <Route path="/movieinfos" component={MovieInfo} />
                  <Route path="/bestmovies" component={BestFilm} />
                </Switch>
              </main>
              <Footer />
            </React.Fragment>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
