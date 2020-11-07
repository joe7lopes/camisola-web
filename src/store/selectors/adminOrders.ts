import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const adminOrdersState = (state: IRootState) => state.adminOrders;

export const getOrdersState = createSelector(
  [adminOrdersState],
  (state) => ({
    loading: state.loading,
    error: state.error,
    orders: state.data ? state.data.content : undefined,
    totalElements: state.data ? state.data.totalElements : undefined,
  }),
);
