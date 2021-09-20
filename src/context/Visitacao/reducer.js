import * as types from './types'

export const reducer = (state,action) => {
    switch (action.type) {
        case types.SUCCESS_LOADING_VISITACOES:
            
            return {...state, visitacoes: action.payload.visitacoes, loading: false}
        case types.LOADING_VISITACOES:

            return {...state, loading: true}
        case types.ERR_LOADING_VISITACOES: 

            return {...state, feedback: action.payload.feedback, loading: false}
        case types.SUCCESS_REGISTRATION_VISITACOES:

            return {...state, visitacoes:[ ...state.visitacoes, action.payload.visitacoes ], loading: false, feedback: ''}
        case types.TRYING_REGISTRATION_VISITACOES:

            return {...state, loading: true}
        case types.ERR_REGISTRATION_VISITACOES:

            return {...state, loading: false, feedback: action.payload.feedback}
        default:
            break;
    }
}