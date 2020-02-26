import {
  FETCH_SETTINGS,
  FETCH_SETTINGS_FULFILLED,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_REJECTED,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_FULFILLED,
  UPDATE_SETTINGS_PENDING,
  UPDATE_SETTINGS_REJECTED,
} from './actionTypes';

import { ISettings } from '../types';

export const fetchSettings = () => ({
  type: FETCH_SETTINGS,
});

export const fetchSettingsPending = () => ({
  type: FETCH_SETTINGS_PENDING,
});

export const fetchSettingsFulfilled = (settings: ISettings) => ({
  type: FETCH_SETTINGS_FULFILLED,
  payload: settings,
});

export const fetchSettingsRejected = (err:string) => ({
  type: FETCH_SETTINGS_REJECTED,
  payload: err,
});

export const updateSettings = (settings: ISettings) => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});

export const updateSettingsPending = () => ({
  type: UPDATE_SETTINGS_PENDING,
});

export const updateSettingsFulfilled = (sizes: string[]) => ({
  type: UPDATE_SETTINGS_FULFILLED,
  payload: sizes,
});

export const updateSettingsRejected = (err: string) => ({
  type: UPDATE_SETTINGS_REJECTED,
  payload: err,
});
