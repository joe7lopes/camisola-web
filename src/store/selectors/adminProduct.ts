import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const adminProductState = (state: IRootState) => state.adminProduct;

export const getAdminProduct = createSelector(
  [adminProductState],
  (state) => ({
    loading: state.loading,
    error: state.error,
    data: state.data,
  }),
);
