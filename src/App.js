import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import SimpleCard from "./components/SimpleCard";
import SimpleCardTwo from "./components/SimpleCardTwo";

export default function App() {
  return (
    <>
      <Router>
        <Grid container spacing={5} >
          <Grid item xs={12}>
            <ButtonAppBar />
          </Grid>

          {/* First Card */}
          <Grid item xs={2} >
          </Grid>
          <Grid item xs={8} >
            <SimpleCard />
          </Grid>
          <Grid item xs={2}>
          </Grid>


          {/* Second Card */}
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <SimpleCardTwo />
          </Grid>
          <Grid item xs={2}>
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