import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavigationHeader from "./components/NavigationHeader";
import Home from "./components/Home";
import ClubPage from "./components/ClubPage";
import ProductDetail from "./components/common/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <NavigationHeader />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/benfica">
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
