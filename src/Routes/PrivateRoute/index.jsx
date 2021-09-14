import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../context/Auth/context";

export const PrivateRoute = ({ children, ...options }) => {
  const { authState } = useContext(AuthContext)
  return (
    //Retornar children caso a rota esteja autenticada
    <Route {...options} render={()=>{
        return authState.authenticated ? ( children ) : (
            <Redirect to={{
                pathname: '/login'
            }} />
        )
    }}>
    
      
    </Route>
  );
};
