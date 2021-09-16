import { useReducer } from "react";
import { VisitadorContext } from "./context";
import { data_visitador } from "./data_visitador";
import { reducer } from "./reducer";

export const VisitadorProvider = ({ children }) => {
  const [ visitadorState, visitadorDispatch ] = useReducer(
    reducer,
    data_visitador
  );
  return (
    <VisitadorContext.Provider
      value={{ visitadorState, visitadorDispatch }}
    >
      {children}
    </VisitadorContext.Provider>
  );
};
