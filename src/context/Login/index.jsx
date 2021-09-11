import P from 'prop-types'
import { createContext, useReducer } from "react";
import loginData from'./data'

export const LoginGlobalContext = createContext();

const reducer = (state, action) => {
    return {...state}
}

export default function LoginContext({children})  {
    const [ loginContextState, dispatch ] = useReducer(reducer, loginData)
    return <LoginGlobalContext value={{loginContextState, dispatch}}>{children}</LoginGlobalContext>
}   

LoginContext.propTypes = {
    children: P.node
}