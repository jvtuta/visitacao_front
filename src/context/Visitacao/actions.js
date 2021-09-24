import * as types from "./types";
import axios from "axios";
import { srv_api, data_auth } from "../Auth/data_auth";

export const load_visitacao = async (dispatch, id_visitado) => {
  let filtro = "filtrar_registros=id_visitado:=:"+id_visitado
  if(id_visitado === "all") {
    filtro = ''
  }
  dispatch({ type: types.LOADING_VISITACOES });
  const config = {
    method: "GET",
    url: srv_api + "visitacao?"+filtro,
    headers: {
      Authorization: "bearer " + localStorage.getItem('token'),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    const response = await (await axios(config)).data;
    dispatch({
      type: types.SUCCESS_LOADING_VISITACOES,
      payload: { visitacoes: [ ...response ] },
    });
  } catch (err) {
    const message = err.toJSON().message
    if(message.includes('404')) {
    dispatch({
      type: types.ERR_LOADING_VISITACOES,
      payload: { 
        feedback: 'Não existem visitações cadastradas para este visitador'
      }
      });
    }
  }
};

export const register_visitacao = async (dispatch, form_user) => {
  dispatch({ type: types.TRYING_REGISTRATION_VISITACOES });
  try {
    const response = await (
      await axios({
        method: "post",
        url: srv_api + "visitacao",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: "bearer" + localStorage.getItem('token')
        },
        data: form_user,
      })
    ).data;
    
    dispatch({
      type: types.SUCCESS_REGISTRATION_VISITACOES,
      payload: { visitacoes: response },
    });
  } catch (err) {
    console.log(err)
    console.log(err.toJSON())
    const message = err.toJSON().message
    if(message.includes('422')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITACOES,
        payload: { 
          feedback: "Visitacao ja cadastrada na base de dados"
        }
      })
    }
    if(message.includes('401')) {
      localStorage.setItem('token', '')
      data_auth.jwt_token = '';

      return dispatch({
        type: types.ERR_REGISTRATION_VISITACOES,
        payload: { 
          feedback: "Usuário não autenticado, realize o login novamente!"
        }
      })
    }
    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITACOES,
        payload: { 
          feedback: "ERRO na API contate o administrador "
        }
      })
    }
    if (message.includes("Network Error")) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITACOES,
        payload: {
          feedback: "ERRO ao se conectar à API contate o administrador",
        },
      });
    }
    return dispatch({
      type: types.ERR_REGISTRATION_VISITACOES,
      payload: { 
        feedback: "ERRO. Contate o administrador" 
      },
    });
  }
};
