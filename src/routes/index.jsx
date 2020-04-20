import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../components/molecules/Nav/Nav';
import Homepage from '../components/pages/HomePage/HomePage';

import SinglePage from '../components/pages/SinglePage/SinglePage';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/:countryCode' component={SinglePage} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
