import React, { useEffect } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  NavigationHeader,
  ClubPage,
  ProductDetail,
  Home,
  AdminPanel,
  Settings,
  NewProduct,
  Cart,
  Orders,
} from '../components';

import ProductList from '../components/admin/product/ProductList';
import EditProduct from '../components/admin/product/EditProduct';

import path from './path';
import { fetchProducts, fetchSettings } from '../actions';
import AdminRoute from './AdminRoute';
import LoginHOC from '../components/auth/LoginHOC';
import ScrollToTop from './ScrollToTop';

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
  PRODUCT_DETAILS,
  CRIANCAS,
  CART,
  LOGIN,
} = path;

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
  <Router>
    <NavigationHeader />
    <ScrollToTop/>
    <div className="c-body-layout">
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={PORTUGAL} component={ClubPage} />
      <Route exact path={BENFICA} component={ClubPage} />
      <Route exact path={PORTO} component={ClubPage} />
      <Route exact path={SPORTING} component={ClubPage} />
      <Route exact path={CRIANCAS} component={ClubPage} />
      <AdminRoute path={CREATE_PRODUCT} component={NewProduct} />
      <AdminRoute path={ADMIN_EDIT_PRODUCT} component={EditProduct} />
      <AdminRoute path={ADMIN_PRODUCTS} component={ProductList} />
      <AdminRoute path={SETTINGS} component={Settings} />
      <AdminRoute path={ADMIN_ORDERS} component={Orders} />
      <AdminRoute exact path={ADMIN} component={AdminPanel} />
      <Route exact path={LOGIN} component={LoginHOC} />
      <Route path={PRODUCT_DETAILS} component={ProductDetail} />
      <Route exact path={CART} component={Cart} />
      <Route>
        <h3>No match</h3>
      </Route>
    </Switch>
    </div>
  </Router>
  );
};

export default Routes;
