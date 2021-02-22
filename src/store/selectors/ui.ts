import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getUI = (state: IRootState) => state.ui;

const getSettings = createSelector(
  [getUI],
  (ui) => ui.settings,
);

export const isFetchingProducts = createSelector(
  [getUI],
  (ui) => ui.products.isFetchingProducts,
);

export const isUpdatingProduct = createSelector(
  [getUI],
  (ui) => ui.admin.isUpdatingProduct,
);

export const isUpdateProductSuccess = createSelector(
  [getUI],
  (ui) => ui.admin.isProductUpdated,
);

export const getAdminUIError = createSelector(
  [getUI],
  (ui) => ui.admin.error,
);

export const isFetchingSettings = createSelector(
  [getUI],
  (ui) => ui.settings.isFetchingSettings,
);

export const isUpdatingSettings = createSelector(
  [getSettings],
  (settings) => settings.isUpdatingSettings,
);

export const imageManager = createSelector(
  [getUI],
  (ui) => ui.imageManager,
);
