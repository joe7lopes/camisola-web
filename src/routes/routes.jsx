import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {
  Switch, Route, BrowserRouter as Router, useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ClubPage,
  ProductDetail,
  Home,
  Cart,
} from '../components';

import { Dashboard } from '../components/admin';

import path from './path';
import { fetchProducts, fetchSettings } from '../actions';
import AdminRoute from './AdminRoute';
import LoginHOC from '../components/auth/LoginHOC';
import ScrollToTop from './ScrollToTop';
import NavigationHeaderRoute from './NavigationHeaderRoute';

const {
  ADMIN,
  PORTUGAL,
  BENFICA,
  PORTO,
  SPORTING,
  PRODUCT_DETAILS,
  CRIANCAS,
  OUTROS,
  CART,
  LOGIN,
} = path;

const Routes = () => (
    <Router>
        <Init/>
        <ScrollToTop/>
        <Switch>
            <NavigationHeaderRoute exact path={'/'} component={Home}/>
            <NavigationHeaderRoute exact path={PORTUGAL} component={ClubPage}/>
            <NavigationHeaderRoute exact path={BENFICA} component={ClubPage}/>
            <NavigationHeaderRoute exact path={PORTO} component={ClubPage}/>
            <NavigationHeaderRoute exact path={SPORTING} component={ClubPage}/>
            <NavigationHeaderRoute exact path={CRIANCAS} component={ClubPage}/>
            <NavigationHeaderRoute exact path={OUTROS} component={ClubPage}/>
            <NavigationHeaderRoute path={PRODUCT_DETAILS} component={ProductDetail}/>
            <NavigationHeaderRoute exact path={CART} component={Cart}/>
            <AdminRoute exact path={ADMIN} component={Dashboard}/>
            <Route exact path={LOGIN} component={LoginHOC}/>
            <Route>
                <h3>No match</h3>
            </Route>
        </Switch>
    </Router>
);

export default Routes;

const Init = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSettings());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (process.env.NODE_ENV === 'production') {
    RecordAnalytics();
  }

  return null;
};

const RecordAnalytics = () => {
  const trackingId = 'UA-125067015-3';
  const location = useLocation();
  ReactGA.initialize(trackingId);
  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location]);

  return null;
};
