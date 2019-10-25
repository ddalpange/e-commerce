import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SellingPage from './pages/SellingPage';


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/products/:productId">
        <SellingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
