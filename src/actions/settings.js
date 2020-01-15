import { FETCH_SETTINGS } from './actionTypes';

export function fetchSettings() {
  return {
    type: FETCH_SETTINGS,
  };
}

export function saveSettings(settings) {
  return {
    type: 'save_settings',
    payload: settings,
  };
}
