import { useReducer } from "react";
import { VisitadoresContext } from "./context";
import { data_visitadores } from "./data_visitadores";
import { reducer } from "./reducer";

export const VisitadoresProvider = ({ children }) => {
  const { visitadoresState, visitadoresDisptach } = useReducer(
    reducer,
    data_visitadores
  );
  return (
    <VisitadoresContext.Provider
      value={(visitadoresState, visitadoresDisptach)}
    >
      {children}
    </VisitadoresContext.Provider>
  );
};
