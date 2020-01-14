import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  NavigationHeader,
  ClubPage,
  ProductDetail,
  Home,
} from '../components';
import path from './path';

const {
  HOME, PORTUGAL, BENFICA, PORTO, SPORTING,
} = path;

const Routes = () => (
  <Router>
    <NavigationHeader />
    <Switch>
      <Route exact path={HOME}>
        <Home />
      </Route>
      <Route path={PORTUGAL}>
        <ClubPage />
      </Route>
      <Route path={BENFICA}>
        <ClubPage />
      </Route>
      <Route path={PORTO}>
        <ClubPage />
      </Route>
      <Route path={SPORTING}>
        <ClubPage />
      </Route>
      <Route path="/product/:id">
        <ProductDetail />
      </Route>
      <Route>
        <h3>No match</h3>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
