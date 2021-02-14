import { combineReducers } from 'redux';
import facebookLogin from './facebook/login/reducer';
import facebookReviews from './facebook/reviews/reducer';

const adminReducer = combineReducers({
  facebookLogin,
  facebookReviews,
});

export default adminReducer;
