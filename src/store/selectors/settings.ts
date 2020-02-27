/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getSettingsFunc = (state: IRootState) => state.settings;

export const getSettings = createSelector(
  [getSettingsFunc],
  (settings) => settings,
);
export const getSettingsSizes = createSelector(
  [getSettings],
  (settings) => settings.sizes,
);

export const getSettingsCategories = createSelector(
  [getSettings],
  (settings) => settings.productCategories,
);

export const getStampingExtraCost = createSelector(
  [getSettings],
  (settings) => settings.stampingExtraCost,
);
