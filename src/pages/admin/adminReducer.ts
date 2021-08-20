import {combineReducers} from 'redux';
import facebookLogin from '../../components/admin/facebook/login/reducer';
import facebookReviews from '../../components/admin/facebook/reviews/reducer';
import auth, {IAdminAuth} from '../../components/admin/auth/reducer';
import reports, {IAdminReportsState} from "./reports/reducer";

export interface IAdminNew {
  facebookLogin: any,
  facebookReviews : any,
  auth: IAdminAuth,
  reports: IAdminReportsState
}

const adminReducer = combineReducers({
  facebookLogin,
  facebookReviews,
  auth,
  reports
});

export default adminReducer;
