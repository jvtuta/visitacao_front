import * as types from "./types";
export const reducer = (state, action) => {
  switch (action.type) {
    case types.SUCCESS_AUTHENTICATION:
      //atribuir valor da resposta ao estado
          if(action.payload.jwt_token) {
            localStorage.setItem('token', action.payload.jwt_token);
            return {
              ...state, 
              user: action.payload.user, 
              jwt_token: action.payload.jwt_token,
              loading: false,
              csrf_token: action.payload.csrf_token
            }
          } else {
            return {
              ...state, 
              jwt_token: false,
              loading: false,
              csrf_token: false,
              feedback: 'Falha ao realizar login, verifique a senha ou usuário'
            }
          }
    case types.TRYING_AUTHENCATION:
      //tela de carregamento
      return { ...state, loading: true }
    case types.ERR_LOGON:
      //Caso der erro
      return {...state, feedback: action.payload.feedback, loading: false};
    case types.TRYING_REGISTRATION:
      return { ...state, loading: true }
    case types.SUCCESS_REGISTRATION:
      return { ...state, loading: false, feedback: true }
    case types.ERR_REGISTRATION: 
      return { ...state, loading: false, feedback: action.payload.feedback}
    default:
      return;
  }
};


