import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useDataFetching from '../hooks/checkConnection';
import Nav from '../components/molecules/Nav/Nav';
import Homepage from '../components/pages/HomePage/HomePage';

import SinglePage from '../components/pages/SinglePage/SinglePage';

const Routes = () => {
  const { isDisconnected } = useDataFetching();

  return (
    <Router>
      <Nav />
      {isDisconnected ? (
        <div className='noneData'>
          <h4>
            Sorry its not you its us. But please ensure you have a valid
            connection
          </h4>
        </div>
      ) : (
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/:countryCode' component={SinglePage} exact />
        </Switch>
      )}
    </Router>
  );
};

export default Routes;
