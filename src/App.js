import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";

export default function App() {
  return (
    <>
      <Router>
        <Grid container spacing={10} >
          <Grid item xs={12}>
            <ButtonAppBar />
          </Grid>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/projects' exact component={Projects} />
          </Switch>
        </Grid>
      </Router>
    </>
  );
}