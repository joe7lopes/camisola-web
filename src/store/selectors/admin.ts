import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const adminState = (state: IRootState) => state.admin;

export const getAdminOrders = createSelector(
  [adminState],
  (admin) => admin.orders,
);
