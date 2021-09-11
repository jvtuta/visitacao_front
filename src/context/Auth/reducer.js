import * as types from "./types";
export const reducer = (state, action) => {
  switch (action.type) {
    case types.SUCCESS_AUTHENTICATION:
      //atribuir valor da resposta ao estado
      if(action.payload.authenticated) {
          return {
              ...state, 
              user: action.payload.user, 
              authenticated: true,
              jwt_token: action.payload.jwt_token,
              loading: false
            }
      }
      return;
    case types.TRYING_AUTHENCATION:
      //tela de carregamento
      return {...state, loading: true}
    case types.ERR_LOGON:
      //Caso der erro
      return {...state, feedback: action.payload, loading: false};
    case 'teste':
      return console.log('testando dispatch no componente filho')
    default:
      return;
  }
};


