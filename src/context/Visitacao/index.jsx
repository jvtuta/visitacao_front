import { useReducer } from "react";
import { VisitacaoContext } from "./context";
import { data_visitacao } from "./data_visitacao";
import { reducer } from "./reducer";
import { useReducer } from "react";

export const VisitacaoProvider = ({ children }) => {
  const { visitacaoState, visitacaoDispatch } = useReducer(
    reducer,
    data_visitacao
  );

  return (
    <VisitacaoContext.Provider value={{ visitacaoState, visitacaoDispatch }}>
      {children}
    </VisitacaoContext.Provider>
  );
};
