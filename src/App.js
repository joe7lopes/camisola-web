import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import Home from './components/Home';
import ClubPage from './components/ClubPage';
import ProductDetail from './components/common/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { route } from './config/routes';

function App() {
  const { HOME, BENFICA } = route;

  return (
    <Router>
      <NavigationHeader />
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route path={BENFICA}>
          <ClubPage pageName="Benfica" />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
