import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_SETTINGS,
  fetchSettingsFulfilled,
  fetchSettingsPending,
  fetchSettingsRejected,
  UPDATE_SETTINGS,
  updateSettingsFulfilled,
  updateSettingsPending,
  updateSettingsRejected,
} from '../actions';

import {Category, ISaveSizesAction, ISettings} from '../types';
import api from './api';

/*
 * +++Executers+++
 */

function* fetchSettings() {
  yield put(fetchSettingsPending());

  try {
    // const { data } = yield call(api.get, '/api/settings');
    const data: ISettings = {
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      stampingExtraCost: 12,
      productDefaultPrice: 35,
      productCategories: [
        { name: 'portugal', displayName: 'Portugal' },
        { name: Category.BENFICA, displayName: 'Benfica' },
        { name: Category.PORTO, displayName: 'Porto' },
        { name: Category.SPORTING, displayName: 'Sporting' },
        { name: 'criancas', displayName: 'Crianças' },
        { name: 'outros', displayName: 'Outros' },
        { name: Category.CAMISOLAS, displayName: 'Camisolas' },
        { name: Category.FATOS_DE_TREINO, displayName: 'Fatos de treino' },
        { name: Category.EQUIPAMENTOS_CRIANCA, displayName: 'Equipamentos de Criança' },
      ],
    };
    yield put(fetchSettingsFulfilled(data));
  } catch (err) {
    yield put(fetchSettingsRejected(err));
  }
}

function* updateSettingsExec({ payload }: ISaveSizesAction) {
  yield put(updateSettingsPending());
  try {
    const { data } = yield call(api.put, '/api/settings', payload);
    yield put(updateSettingsFulfilled(data));
  } catch (err) {
    yield put(updateSettingsRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchSettings() {
  yield takeLatest(FETCH_SETTINGS, fetchSettings);
}

export function* watchUpdateSettings() {
  yield takeLatest(UPDATE_SETTINGS, updateSettingsExec);
}
