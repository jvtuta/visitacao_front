import * as types from './types'
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOADING_VISITACAO:
            return {...state, loading: true};
        case types.SUCCESS_VISITACAO:
            return {
                ...state, 
                visitacoes: action.payload.user, 
                loading:false
            }
        default:
            break;
    }
    return {...state}
}