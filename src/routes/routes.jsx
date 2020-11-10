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
  AdminPanel,
  Settings,
  NewProduct,
  Cart,
  Orders,
} from '../components';

import { Dashboard, ImagesManager } from '../components/admin';
import ProductList from '../components/admin/product/ProductList';
import EditProduct from '../components/admin/product/edit/EditProduct';

import path from './path';
import { fetchProducts, fetchSettings } from '../actions';
import AdminRoute from './AdminRoute';
import LoginHOC from '../components/auth/LoginHOC';
import ScrollToTop from './ScrollToTop';
import NavigationHeaderRoute from './NavigationHeaderRoute';

const {
  PORTUGAL,
  BENFICA,
  PORTO,
  SPORTING,
  SETTINGS,
  CREATE_PRODUCT,
  ADMIN_EDIT_PRODUCT,
  ADMIN_PRODUCTS,
  ADMIN,
  ADMIN_ORDERS,
  ADMIN_IMAGES,
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
            <AdminRoute path={CREATE_PRODUCT} component={NewProduct}/>
            <AdminRoute path={ADMIN_EDIT_PRODUCT} component={EditProduct}/>
            <AdminRoute path={ADMIN_PRODUCTS} component={ProductList}/>
            <AdminRoute path={SETTINGS} component={Settings}/>
            <AdminRoute path={ADMIN_ORDERS} component={Orders}/>
            <AdminRoute path={ADMIN_IMAGES} component={ImagesManager}/>
            <AdminRoute exact path={ADMIN} component={AdminPanel}/>
            <AdminRoute exact path="/admin/dashboard" component={Dashboard}/>
            <Route exact path={LOGIN} component={LoginHOC}/>
            <Route>
                <h3>No match</h3>
            </Route>
        </Switch>
    </Router>
);

export default Routes;

const Init = () => {
  const trackingId = 'UA-125067015-3';
  ReactGA.initialize(trackingId);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location]);
  return null;
};
