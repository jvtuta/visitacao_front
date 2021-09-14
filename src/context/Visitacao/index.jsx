import { data_visitacao } from './data_visitacao';
import { VisitacaoContext } from "./context";
import { reducer } from './reducer'
import { useReducer } from 'react';
export const VisitacaoProvider = () => {
    const [ stateVisitacao, dispatchVisitacao ] = useReducer(reducer, data_visitacao)
    return <VisitacaoContext.Provider value={stateVisitacao, dispatchVisitacao}></VisitacaoContext.Provider>
}