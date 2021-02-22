import { combineReducers } from 'redux';
import settings from './settings';
import account from './account';
import products from './products';
import cart from './cart';
import ui from './ui';
import admin from './admin';
import adminOrders from './adminOrders';
import adminProduct from './adminProduct';
import uiAdminDashboardNotification from './uiAdminDashboardNotification';
import adminNew from '../components/admin/adminReducer';
import homePage from '../components/home/reducer';

export default combineReducers({
  account,
  products,
  settings,
  cart,
  ui,
  admin,
  adminOrders,
  adminProduct,
  uiAdminDashboardNotification,
  adminNew,
  homePage,
});
