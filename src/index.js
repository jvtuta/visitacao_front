import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./Routes/PrivateRoute";

import "./styles/Global/bootstrap/style-min.css";
import { Login } from "./templates/Login";
import { Registro } from "./templates/Registro";
import { Home } from "./templates/Home";

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
        </Switch>
        <Switch>
          {/* VisitadorProvider */}
          {/* VisitacoesProvider */}
          {/* Private Routes */}

          {/* Ultima rota */}
          <VisitadorProvider>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </VisitadorProvider>
        </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
