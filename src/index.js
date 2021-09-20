import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./Routes/PrivateRoute";

import "./styles/Global/bootstrap/style-min.css";
import { Login } from "./templates/Login";
import { Registro } from "./templates/Registro";
import { Home } from "./templates/Home";

import { VisitacaoProvider } from "./context/Visitacao";
import { VisitadorProvider } from "./context/Visitador";
//Contexts
import { AuthProvider } from "./context/Auth";

// import { Home } from "./templates/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Switch>
          {/* Public routes */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registrar" exact>
            <Registro />
          </Route>

          {/* VisitadorProvider */}
          {/* VisitacoesProvider */}
          
          {/* Ultima rota */}
          <VisitadorProvider>
            <VisitacaoProvider> 
              <PrivateRoute path="/">
                <Home />
              </PrivateRoute>
            </VisitacaoProvider>
          </VisitadorProvider>
        </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
