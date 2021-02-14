import { all, fork } from 'redux-saga/effects';

import {
  watchFetchSettings,
  watchSaveHomePageLayout,
} from './settings';
import {
  watchFetchProducts,
  watchCreateNewProduct,
  watchUpdateProduct,
  watchDeleteProduct,
  watchProductChanges,
} from './products';

import { watchAddToCart } from './cart';
import {
  watchFetchOrders,
  watchFetchOrdersWithCriteria,
  watchPlaceOrder,
  watchUpdateOrder,
} from './orders';

import {
  watchResetPassword,
  watchSignIn,
  watchSignOut,
  watchSignUp,
} from './auth';

import {
  watchDeleteImages,
  watchFetchImages,
  watchImagesChanges,
  watchUploadImages,
} from './images';

import { watchUpdateFBToken } from '../components/admin/facebook/login/saga';
import { watchFetchFbReviews } from '../components/home/facebook/saga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchSettings),
    fork(watchSaveHomePageLayout),
    fork(watchUploadImages),
    fork(watchFetchImages),
    fork(watchDeleteImages),
    fork(watchImagesChanges),
    fork(watchFetchProducts),
    fork(watchProductChanges),
    fork(watchCreateNewProduct),
    fork(watchUpdateProduct),
    fork(watchDeleteProduct),
    fork(watchFetchOrders),
    fork(watchFetchOrdersWithCriteria),
    fork(watchPlaceOrder),
    fork(watchUpdateOrder),
    fork(watchAddToCart),
    fork(watchSignIn),
    fork(watchSignOut),
    fork(watchSignUp),
    fork(watchResetPassword),
    fork(watchUpdateFBToken),
    fork(watchFetchFbReviews),
  ]);
}
