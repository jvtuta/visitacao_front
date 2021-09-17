import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOADING_VISITADOR:
            return {...state, loading:true}
        case types.SUCCESS_LOADING_VISITADOR:
            return {...state, visitadores: action.payload.visitadores, loading: false}
        case types.ERR_LOADING_VISITADOR:
            return { ...state, feedback: action.payload.feedback, loading: false }
        default:
            return
    }
}