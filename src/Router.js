import React from "react";
import Home from './components/Home';
import List from './components/List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
  const TheRouter = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
            <Route exact path="/list">
              <List />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
      </Switch>
      </Router>   
    );
  }

  export default TheRouter;