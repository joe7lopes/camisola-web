/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line consistent-return
const additionalDevMiddleWare = () => {
  if (process.env.NODE_ENV === 'development') {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }
};
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    additionalDevMiddleWare(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
