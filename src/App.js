import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
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
        <ButtonAppBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}