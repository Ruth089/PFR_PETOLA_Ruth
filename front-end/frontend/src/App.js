import React from "react";
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import GlobalStyle from './assets/style/globalStyle';
import Listes from "./views/Listes";
import Card from "./components/Card";
import Connexion from "./views/Connexion";
import Inscription from "./views/Inscription";
import Abonnement from "./views/Abonnemt";
import FormAbonnemt from "./views/FormAbonnemt";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Switch>
          
          <Route exact path="/" component={Connexion} />
          <Route exact path="/inscription" component={Inscription} />
          <Route exact path="/accueil" component={Home} />
          <Route path="/FormAbonnemt">
            <FormAbonnemt />
          </Route>
          <Route path="/Mes_abonnements">
            <Abonnement />
          </Route>
          <Route exact path="/listes-des-startups">
            <Listes />
          </Route>
          <Route path="/details" component={Card} />
          
        </Switch>
      </div>
      <GlobalStyle />
    </Router>
  );
}

export default App;
