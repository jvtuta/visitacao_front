import * as types from "./types";
export const reducer = (state, action) => {
  switch (action.type) {
    case types.SUCCESS_AUTHENTICATION:
      //atribuir valor da resposta ao estado
      if(action.payload.authenticated) {
          return {
              ...state, 
              user: action.payload.user, 
              authenticated: action.payload.authenticated,
              jwt_token: action.payload.jwt_token,
              loading: false,
              csrf_token: action.payload.csrf_token
            }
      }
    case types.TRYING_AUTHENCATION:
      //tela de carregamento
      return { ...state, loading: true }
    case types.ERR_LOGON:
      //Caso der erro
      return {...state, feedback: action.payload, loading: false};
    case types.TRYING_REGISTRATION:
      return { ...state, loading: true }
    case types.SUCCESS_REGISTRATION:
      return { ...state, loading: false, feedback: 'Usuário cadastrado com sucesso!' }
    case types.ERR_REGISTRATION: 
      return { ...state, loading: false, feedback: 'Erro ao cadastrar usuário'}
    default:
      return;
  }
};


