/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { Category, IRootState } from '../../types';
import {
  getAllProducts, getBenficaProducts, getPortoProducts, getSportingProducts,
} from './products';

const getUI = (state: IRootState) => state.ui;

const getSettings = createSelector(
  [getUI],
  (ui) => ui.settings,
);

export const isFetchingProducts = createSelector(
  [getUI],
  (ui) => ui.products.isFetchingProducts,
);

export const isFetchingSettings = createSelector(
  [getUI],
  (ui) => ui.settings.isFetchingSettings,
);

export const isUpdatingSettings = createSelector(
  [getSettings],
  (settings) => settings.isUpdatingSettings,
);
