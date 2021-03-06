import * as types from "./types";
import { srv_api } from "./data_auth";
import axios from "axios";

export const Authenticate_user = async (dispatch, form_user) => {
  dispatch({ type: types.TRYING_AUTHENCATION });

  try {
    const response = await (
      await axios({
        method: "post",
        url: srv_api + "login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        data: form_user,
      })
    ).data;
    //retornar função para ser executada no componente para uma estabiliade maior entre as requisições da api
    dispatch({
      type: types.SUCCESS_AUTHENTICATION,
      payload: { ...response }, //api deve retornar jwt_token e user caso dê sucesso
    });
  } catch (err) {
    console.log(err.toJSON())
    const message = err.toJSON().message

    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_REGISTRATION,
        payload: { feedback: "ERRO na API contate o administrador "}
      })
    }
    if (message.includes("Network Error")) {
      return dispatch({
        type: types.ERR_LOGON,
        payload: {
          feedback: "Problema ao se conectar à API contate o administrador",
        },
      });
    }
    if(message.includes('403')) {
      return dispatch({
        type: types.ERR_LOGON,
        payload: {
          feedback: 'Usuario nao autorizado para login'
        }
      })
    }
    return dispatch({
      type: types.ERR_LOGON,
      payload: { feedback: "ERRO. Contate o administrador" },
    });
  }
};

export const Register_user = async (dispatch, form_user) => {
  dispatch({ type: types.TRYING_REGISTRATION });
  try {
    const response = await (
      await axios({
        method: "post",
        url: srv_api + "register",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        data: form_user,
      })
    ).data;
    dispatch({
      type: types.SUCCESS_REGISTRATION,
      payload: { ...response }, //errado
    });
  } catch (err) {
    console.log(err.toJSON())
    const message = err.toJSON().message
    if(message.includes('422')) {
      return dispatch({
        type: types.ERR_REGISTRATION,
        payload: { 
          feedback: "Usuário ja cadastrado na base de dados"
        }
      })
    }
    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_REGISTRATION,
        payload: { 
          feedback: "ERRO na API contate o administrador "
        }
      })
    }
    if (message.includes("Network Error")) {
      return dispatch({
        type: types.ERR_REGISTRATION,
        payload: {
          feedback: "ERRO ao se conectar à API contate o administrador",
        },
      });
    }
    return dispatch({
      type: types.ERR_REGISTRATION,
      payload: { 
        feedback: "ERRO. Contate o administrador" 
      },
    });
  }
};
