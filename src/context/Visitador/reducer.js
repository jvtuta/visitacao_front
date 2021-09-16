import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOADING_VISITADOR:
            return {...state, loading:true}
        case types.SUCCESS_LOADING_VISITADOR:
            return {...state, visitadores: action.payload.visitadores, loading: false}
        default:
            return
    }
    return {...state}
}