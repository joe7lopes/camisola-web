import { FETCH_SETTINGS, FETCH_SETTINGS_SUCCESS } from './actionTypes';

export function fetchSettings() {
  return {
    type: FETCH_SETTINGS,
  };
}

export function fetchSettingsSuccess(settings) {
  return {
    type: FETCH_SETTINGS_SUCCESS,
    payload: settings,
  };
}

export function saveSettings(settings) {
  return {
    type: 'save_settings',
    payload: settings,
  };
}
