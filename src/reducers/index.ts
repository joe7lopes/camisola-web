import { combineReducers } from 'redux';
import settings from './settings';
import account from './account';
import products from './products';
import cart from './cart';
import ui from './ui';

export default combineReducers({
  account,
  products,
  settings,
  cart,
  ui
});
