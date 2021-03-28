import {all, fork} from 'redux-saga/effects';

import {
    watchFetchSettings,
    watchSaveSettings,
} from './settings';
import {
    watchFetchProducts,
    watchCreateNewProduct,
    watchUpdateProduct,
    watchDeleteProduct,
    watchProductChanges,
} from './products';

import {watchAddToCart} from './cart';
import {
    watchFetchOrders,
    watchFetchOrdersWithCriteria,
    watchPlaceOrder,
    watchUpdateOrder,
} from './orders';

import {
    watchDeleteImages,
    watchFetchImages,
    watchImagesChanges,
    watchUploadImages,
} from './images';

import {watchSignIn} from '../components/admin/auth/saga';
import {watchUpdateFBToken} from '../components/admin/facebook/login/saga';
import {watchFetchFbReviews} from '../components/home/facebook/saga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchSettings),
        fork(watchSaveSettings),
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
        fork(watchUpdateFBToken),
        fork(watchFetchFbReviews),
    ]);
}
