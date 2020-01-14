import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const App = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};

export default App;
