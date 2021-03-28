import {
  RESET_UI_ADMIN_DASHBOARD,
  SAVE_SETTINGS,
} from '../actions';
import { IUIAdminDashboardNotification } from '../types';

const INITIAL_STATE: IUIAdminDashboardNotification = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case RESET_UI_ADMIN_DASHBOARD:
      return INITIAL_STATE;
    case SAVE_SETTINGS.PENDING:
      return { ...state, loading: true };
    case SAVE_SETTINGS.FULFILLED:
      return { ...state, loading: false, data: payload };
    case SAVE_SETTINGS.REJECTED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
