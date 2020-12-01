import {
  FETCH_SETTINGS,
  FETCH_SETTINGS_FULFILLED,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_REJECTED,
  RESET_UI_ADMIN_DASHBOARD,
  SAVE_HOME_PAGE_LAYOUT,
  SAVE_SETTINGS_FULFILLED,
  SAVE_SETTINGS_PENDING,
  SAVE_SETTINGS_REJECTED,
} from './actionTypes';

import { Category, ISettings } from '../types';

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

export const saveSettingsPending = () => ({
  type: SAVE_SETTINGS_PENDING,
});

export const saveSettingsFulfilled = (settings: ISettings) => ({
  type: SAVE_SETTINGS_FULFILLED,
  payload: settings,
});

export const saveSettingsRejected = (err: string) => ({
  type: SAVE_SETTINGS_REJECTED,
  payload: err,
});

export const saveHomePageLayout = (orderedIds: string[], category: Category) => ({
  type: SAVE_HOME_PAGE_LAYOUT,
  payload: { category, productIds: orderedIds },
});

export const resetUIAdminDashBoard = () => ({
  type: RESET_UI_ADMIN_DASHBOARD,
});