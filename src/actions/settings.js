import {
  FETCH_SETTINGS, FETCH_SETTINGS_FULFILLED, SAVE_SIZES, SAVE_SIZES_FULFILLED,
} from './actionTypes';

export const fetchSettings = () => ({
  type: FETCH_SETTINGS,
});

export const fetchSettingsFulfilled = (settings) => ({
  type: FETCH_SETTINGS_FULFILLED,
  payload: settings,
});

export const saveSizes = (sizes) => ({
  type: SAVE_SIZES,
  payload: sizes,
});


export const saveSizesFulfilled = (sizes) => ({
  type: SAVE_SIZES_FULFILLED,
  payload: sizes,
});
