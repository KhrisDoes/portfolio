import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <>
      <Router>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <ButtonAppBar className={classes.root} />
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