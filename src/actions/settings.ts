import {
    RESET_UI_ADMIN_DASHBOARD,
} from './actionTypes';

import {action, createRequestTypes} from '../actions';

import {ISettings} from '../types';

export const FETCH_SETTINGS = createRequestTypes('FETCH_SETTINGS');
export const SAVE_SETTINGS = createRequestTypes('SAVE_SETTINGS');

export const fetchSettings = () => action(FETCH_SETTINGS.REQUESTED, undefined);
export const fetchSettingsPending = () => action(FETCH_SETTINGS.PENDING, undefined);
export const fetchSettingsFulfilled = (settings: ISettings) => action(FETCH_SETTINGS.FULFILLED, {settings});
export const fetchSettingsRejected = (error: string) => action(FETCH_SETTINGS.REJECTED, {error});

export const saveSettings = (settings: ISettings) => action(SAVE_SETTINGS.REQUESTED, {settings});
export const saveSettingsPending = () => action(SAVE_SETTINGS.PENDING, undefined);
export const saveSettingsFulfilled = (settings: ISettings) => action(SAVE_SETTINGS.FULFILLED, {settings});
export const saveSettingsRejected = (error: string) => action(SAVE_SETTINGS.REJECTED, {error});

export const resetUIAdminDashBoard = () => ({
    type: RESET_UI_ADMIN_DASHBOARD,
});