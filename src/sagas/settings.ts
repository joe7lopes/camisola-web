import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';

import {
  FETCH_SETTINGS,
  SAVE_HOME_PAGE_LAYOUT,
  fetchSettingsFulfilled,
  fetchSettingsPending,
  fetchSettingsRejected,
  saveSettingsFulfilled,
  saveSettingsRejected,
  saveSettingsPending,
  fetchSettings,
} from '../actions';

import { Category, IRootState, ISettings } from '../types';
import api from './api';

/*
 * +++Executers+++
 */

function* fetchSettingsExec() {
  yield put(fetchSettingsPending());

  try {
    const { data } = yield call(api.get, '/api/settings');
    const settings: ISettings = {
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL',
        '1-2 anos',
        '3-4 anos',
        '5-6 anos',
        '7-8 anos',
        '9-10 anos',
        '11-12 anos',
        '13-14 anos',
      ],
      stampingExtraCost: 12,
      productDefaultPrice: 30,
      productCategories: [
        { name: Category.PORTUGAL, displayName: 'Portugal' },
        { name: Category.BENFICA, displayName: 'Benfica' },
        { name: Category.PORTO, displayName: 'Porto' },
        { name: Category.SPORTING, displayName: 'Sporting' },
        { name: Category.CRIANCAS, displayName: 'Crianças' },
        { name: Category.OUTROS, displayName: 'Outros' },
        { name: Category.PROMOCOES, displayName: 'Promoções' },
        { name: Category.CAMISOLAS, displayName: 'Camisolas' },
        { name: Category.FATOS_DE_TREINO, displayName: 'Fatos de treino' },
        { name: Category.EQUIPAMENTOS_CRIANCA, displayName: 'Equipamentos de Criança' },
      ],

      ...data,
    };

    yield put(fetchSettingsFulfilled(settings));
  } catch (err) {
    yield put(fetchSettingsRejected(err));
  }
}

function* saveHomePageLayoutExec({ payload }: any) {
  yield put(saveSettingsPending());
  const settings = yield select((state: IRootState) => state.settings);
  let homePageLayout;
  if (payload.category === Category.BENFICA) {
    homePageLayout = { ...settings.homePageLayout, benficaProductsOrder: payload.productIds };
  } else if (payload.category === Category.SPORTING) {
    homePageLayout = { ...settings.homePageLayout, sportingProductsOrder: payload.productIds };
  } else if (payload.category === Category.PORTO) {
    homePageLayout = { ...settings.homePageLayout, portoProductsOrder: payload.productIds };
  } else {
    homePageLayout = settings.homePageLayout;
  }

  const newSettings = {
    ...settings,
    homePageLayout,
  };

  try {
    const { data } = yield call(api.post, '/api/settings', newSettings);
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
  yield takeLatest([
    FETCH_SETTINGS,
  ], fetchSettingsExec);
}

export function* watchSaveHomePageLayout() {
  yield takeLatest(SAVE_HOME_PAGE_LAYOUT, saveHomePageLayoutExec);
}
