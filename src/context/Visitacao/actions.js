import * as types from './types'
import {axios} from 'axios';
//
export const load_visitacao = async (dispatch) => {
    dispatch({ type: types.LOADING_VISITACAO })
    
    const response = await ( axios({
        
    }))
    //retornar função
}

//cadastrar visitacoes
export const cadastrar_visitacao = (dispatch, form_visitacao) => {
    dispatch({type: types.TRYING_REGISTRATION})
}