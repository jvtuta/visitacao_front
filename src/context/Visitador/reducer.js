import * as types from "./types";
export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOADING_VISITADOR:

      return { ...state, loading: true, feedback: '' };
    case types.SUCCESS_LOADING_VISITADOR:

      return {
        ...state,
        visitadores: action.payload.visitadores,
        loading: false,
        feedback: ''
      };
    case types.ERR_LOADING_VISITADOR:

      return { ...state, feedback: action.payload.feedback, loading: false };
    case types.SUCCESS_REGISTRATION_VISITADOR:
      
      return {
        ...state,
        visitadores: [...state.visitadores, action.payload.visitador],
        visitador: action.payload.visitador,
        loading: false,
        feedback: ''
      };
    case types.TRYING_REGISTRATION_VISITADOR:

      return { ...state, loading: true, feedback: '' };
    case types.ERR_REGISTRATION_VISITADOR:

      return { ...state, loading: false, feedback: action.payload.feedback};
    default:
      break;
  }
};
