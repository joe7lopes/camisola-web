import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router, Route, Switch, useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Cart, ClubPage, Home, ProductDetail,
} from '../components';

import { Dashboard } from '../components/admin';

import path from './path';
import { fetchProducts, fetchSettings, fetchFbReviews } from '../actions';
import AdminRoute from './AdminRoute';
import Login from '../components/auth/Login';
import ScrollToTop from './ScrollToTop';
import NavigationHeaderRoute from './NavigationHeaderRoute';
import OrderSummary from '../components/order_summary/OrderSummary';

const Routes = () => (
    <Router>
        <Init/>
        <ScrollToTop/>
        <Switch>
            <NavigationHeaderRoute exact path={'/'} component={Home}/>
            <NavigationHeaderRoute exact path={path.PORTUGAL} component={ClubPage}/>
            <NavigationHeaderRoute exact path={path.BENFICA} component={ClubPage}/>
            <NavigationHeaderRoute exact path={path.PORTO} component={ClubPage}/>
            <NavigationHeaderRoute exact path={path.SPORTING} component={ClubPage}/>
            <NavigationHeaderRoute exact path={path.CRIANCAS} component={ClubPage}/>
            <NavigationHeaderRoute exact path={path.OUTROS} component={ClubPage}/>
            <NavigationHeaderRoute exact path={path.PROMOCOES} component={ClubPage}/>
            <NavigationHeaderRoute path={path.PRODUCT_DETAILS} component={ProductDetail}/>
            <NavigationHeaderRoute exact path={path.CART} component={Cart}/>
            <Route exact path={path.LOGIN} component={Login}/>
            {[
              path.ADMIN_DASHBOARD,
              path.ADMIN_PRODUCTS,
              path.ADMIN_NEW_PRODUCT,
              path.ADMIN_PRODUCTS_CONFIG,
              path.ADMIN_IMAGES,
              path.ADMIN_ORDERS,
              path.ADMIN_ORDERS_REPORTS_PREBOOKING,
              path.ADMIN_SETTINGS,
              path.ADMIN_SETTINGS_HOME_PAGE_LAYOUT,
              path.ADMIN,
            ].map((url, index) => <AdminRoute exact path={url} component={Dashboard} key={index}/>)}
            <Route exact path="/account" component={OrderSummary}/>
            <Route>
                <h3> :( a pagina nao existe</h3>
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
    dispatch(fetchFbReviews());
  }, [dispatch]);

  if (process.env.NODE_ENV === 'production') {
    RecordAnalyticsWithTrackingID('UA-125067015-3');
  }else {
      RecordAnalyticsWithTrackingID('fake');
  }

  return null;
};

const RecordAnalyticsWithTrackingID = (trackingId) => {
  const { pathname } = useLocation();
  ReactGA.initialize(trackingId);
  ReactGA.plugin.require('ec');
  useEffect(() => {
    ReactGA.set({ page: pathname }); // Update the user's current page
    ReactGA.pageview(pathname); // Record a pageview for the given page
  }, [pathname]);

  return null;
};
