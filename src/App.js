/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import rootSaga from './sagas';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};

export default App;
