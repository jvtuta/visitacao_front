import { useReducer } from "react";
import { VisitadoContext } from "./context";
import { data_visitado } from "./data_visitado";
import { reducer } from "./reducer";

export const VisitadorProvider = ({ children }) => {
  const [ visitadosState, visitadosDispatch ] = useReducer(
    reducer,
    data_visitado
  );
  return (
    <VisitadoContext.Provider
      value={{ visitadosState, visitadosDispatch }}
    >
      {children}
    </VisitadoContext.Provider>
  );
};
