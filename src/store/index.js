/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (process.env !== 'production'
        && typeof window !== 'undefined'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
