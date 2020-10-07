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

import Theatres from "./components/inTheatres/Theatres";
import Popular from "./components/Movies/Popular";
import MovieInfo from "./components/Movies/movieInfos";

function App() {
  return (
    <Router>
      <ContextProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <React.Fragment>
            <Navbar />
            <main>
              <Switch>
                <Redirect from="/" to="/acceuil" exact></Redirect>
                <Route path="/acceuil" component={Popular} />
                <Route path="/theatres" component={Theatres} />
                <Route path="/movieinfos" component={MovieInfo} />
              </Switch>
            </main>
          </React.Fragment>
        </MuiPickersUtilsProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
