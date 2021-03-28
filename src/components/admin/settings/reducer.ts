import { combineReducers } from 'redux';
import productSettings from '../product/config/reducer';
import homePageLayout from './home_page_layout/reducer';
import { FETCH_SETTINGS } from '../../../actions';

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: undefined,
};

const status = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case FETCH_SETTINGS.PENDING:
      return { ...state, loading: true };
    case FETCH_SETTINGS.FULFILLED:
      return { ...state, loading: false, data: true };
    case FETCH_SETTINGS.REJECTED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  homePageLayout,
  productSettings,
  status,
});

export default reducer;
