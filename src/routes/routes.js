import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  NavigationHeader,
  ClubPage,
  ProductDetail,
  Home,
  AdminPannel,
  Settings,
  NewProduct,
} from '../components';
import path from './path';

const {
  PORTUGAL, BENFICA, PORTO, SPORTING,
} = path;

const Routes = () => (
  <Router>
    <NavigationHeader />
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={PORTUGAL} component={ClubPage} />
      <Route path={BENFICA} component={ClubPage} />
      <Route path={PORTO} component={ClubPage} />
      <Route path={SPORTING} component={ClubPage} />
      <Route path="/admin/new-product" component={NewProduct} />
      <Route path="/admin/settings" component={Settings}/>
      <Route path="/admin" component={AdminPannel}/>
      <Route path="/product/:id" component={ProductDetail}/>
      <Route>
        <h3>No match</h3>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
