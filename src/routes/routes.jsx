import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  NavigationHeader,
  ClubPage,
  ProductDetail,
  Home,
  AdminPannel,
  Settings,
  NewProduct,
  Account,
  OrderSummary,
  Cart,
  Orders,
} from '../components';

import path from './path';
import { fetchProducts, fetchSettings } from '../actions';

const {
  PORTUGAL,
  BENFICA,
  PORTO,
  SPORTING,
  ACCOUNT,
  SETTINGS,
  CREATE_PRODUCT,
  ADMIN,
  ADMIN_ORDERS,
  PRODUCT_DETAILS,
  ORDER_SUMMARY,
  CART,
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
    <div className="c-body-layout">
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={PORTUGAL} component={ClubPage} />
      <Route exact path={BENFICA} component={ClubPage} />
      <Route exact path={PORTO} component={ClubPage} />
      <Route exact path={SPORTING} component={ClubPage} />
      <Route exact path={ACCOUNT} component={Account} />
      <Route path={CREATE_PRODUCT} component={NewProduct} />
      <Route path={SETTINGS} component={Settings} />
      <Route path={ADMIN_ORDERS} component={Orders} />
      <Route exact path={ADMIN} component={AdminPannel} />
      <Route path={PRODUCT_DETAILS} component={ProductDetail} />
      <Route path={ORDER_SUMMARY(':id')} component={OrderSummary} />
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
