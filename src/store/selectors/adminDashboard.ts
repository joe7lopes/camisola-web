import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const uiDashBoardState = (state: IRootState) => state.uiAdminDashboardNotification;

export const requestStatus = createSelector(
  [uiDashBoardState],
  (state) => ({ loading: state.loading, success: state.data, error: state.error }),
);
