import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { PrivateRoute } from "./Routes/PrivateRoute";

import "./styles/Global/bootstrap/style-min.css";
import { Login } from "./templates/Login";
import { Registro } from "./templates/Registro";
import { Home } from "./templates/Home";
import { Visitacao } from "./context/Visitacao";

// import { Home } from "./templates/Home";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registrar" exact>
            <Registro />
          </Route>
      
          <PrivateRoute path="/">
            
            <Home />

          </PrivateRoute>

        </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
