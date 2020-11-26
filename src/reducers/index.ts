import { combineReducers } from 'redux';
import settings from './settings';
import account from './account';
import products from './products';
import cart from './cart';
import ui from './ui';
import auth from './auth';
import admin from './admin';
import adminOrders from './adminOrders';
import adminProduct from './adminProduct';
import homePageLayout from './homePageLayout';

export default combineReducers({
  account,
  products,
  settings,
  cart,
  ui,
  auth,
  admin,
  adminOrders,
  adminProduct,
  homePageLayout,
});
