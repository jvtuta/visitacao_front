import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ children, ...options }) => {
  const authenticated = localStorage.getItem('token') ? true : false
  

  return (
    //Retornar children caso a rota esteja autenticada
    <Route
      {...options}
      render={() => {
        return authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    ></Route>
  );
};
