import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../components/pages/HomePage/HomePage";
import SinglePage from "../components/pages/SinglePage/SinglePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/country/:countryname" component={SinglePage} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
