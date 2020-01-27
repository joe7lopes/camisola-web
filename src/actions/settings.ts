import {
  FETCH_SETTINGS, FETCH_SETTINGS_FULFILLED, SAVE_SIZES, SAVE_SIZES_FULFILLED,
} from './actionTypes';

import { ISettings } from '../types';

export const fetchSettings = () => ({
  type: FETCH_SETTINGS,
});

export const fetchSettingsFulfilled = (settings: ISettings) => ({
  type: FETCH_SETTINGS_FULFILLED,
  payload: settings,
});


export interface ISaveSizesAction {
  type: string,
  payload: string[]
}

export const saveSizes = (sizes:string[]) => ({
  type: SAVE_SIZES,
  payload: sizes,
});


export const saveSizesFulfilled = (sizes: string[]) => ({
  type: SAVE_SIZES_FULFILLED,
  payload: sizes,
});
