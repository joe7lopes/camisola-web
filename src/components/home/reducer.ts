import { combineReducers } from 'redux';
import facebookReviews from './facebook/reducer';

const homeReducer = combineReducers({
  facebookReviews,
});

export default homeReducer;
