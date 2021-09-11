import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/Auth";

import "./styles/Global/bootstrap/style-min.css";
import { Login } from "./templates/Login";
import Registro from "./templates/Registro";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Route path="/login" excat>
          <Login />
        </Route>
        <Route path="/registro" exact>
          <Registro />
        </Route>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
