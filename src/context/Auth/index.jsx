import { AuthContext } from "./context";
import { data_auth } from "./data_auth";
import { useReducer } from "react";
import { reducer } from "./reducer";

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(reducer, data_auth);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
  //chamada do authdispatch nos componentes dentro do contexto = authDispatch({type: '', action: ''})
}
