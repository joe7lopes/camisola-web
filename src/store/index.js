/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const devStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const prodStore = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const store = process.env.NODE_ENV === 'production' ? prodStore : devStore;
export default prodStore;
