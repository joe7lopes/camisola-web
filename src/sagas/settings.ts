import {
    call, put, takeLatest,
} from 'redux-saga/effects';

import {
    FETCH_SETTINGS,
    SAVE_SETTINGS,
    fetchSettingsFulfilled,
    fetchSettingsPending,
    fetchSettingsRejected,
    saveSettingsFulfilled,
    saveSettingsRejected,
    saveSettingsPending,
    fetchSettings,
} from '../actions';

import api from './api';

/*
 * +++Executers+++
 */

function* fetchSettingsExec() {
    yield put(fetchSettingsPending());

    try {
        const {data} = yield call(api.get, '/api/settings');
        yield put(fetchSettingsFulfilled(data));
    } catch (err) {
        yield put(fetchSettingsRejected(err));
    }
}

function* saveSettingsExec({payload}: any) {
    yield put(saveSettingsPending());

    try {
        const {data} = yield call(api.post, '/api/settings', payload.settings);
        yield put(saveSettingsFulfilled(data));
        yield put(fetchSettings());
    } catch (error) {
        yield put(saveSettingsRejected(error));
    }
}

/*
 * +++Watchers+++
 */

export function* watchFetchSettings() {
    yield takeLatest(FETCH_SETTINGS.REQUESTED, fetchSettingsExec);
}

export function* watchSaveSettings() {
    yield takeLatest(SAVE_SETTINGS.REQUESTED, saveSettingsExec);
}
