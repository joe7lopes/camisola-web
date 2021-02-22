import { combineReducers } from 'redux';
import facebookLogin from './facebook/login/reducer';
import facebookReviews from './facebook/reviews/reducer';
import auth, { IAdminAuth } from './auth/reducer';

export interface IAdminNew {
  facebookLogin: any,
  facebookReviews : any,
  auth: IAdminAuth
}

const adminReducer = combineReducers({
  facebookLogin,
  facebookReviews,
  auth,
});

export default adminReducer;
