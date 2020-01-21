import { combineReducers } from 'redux';
import settings from './settings';
import account from './account';
import products from './products';

export default combineReducers({
  account,
  products,
  settings,
});
