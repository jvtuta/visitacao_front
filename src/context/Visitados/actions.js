import * as types from "./types";
import axios from "axios";
import { srv_api } from "../Auth/data_auth";
import { data_auth } from "../Auth/data_auth";



export const load_visitado = async (dispatch) => {
  dispatch({ type: types.LOADING_VISITADOR });
  const config = {
    method: "GET",
    url: srv_api + "visitado",
    headers: {
      Authorization: "bearer " + localStorage.getItem('token'),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    const response = await(await axios(config)).data;
    dispatch({
      type: types.SUCCESS_LOADING_VISITADOR,
      payload: { visitados: [...response] },
    });
  } catch (err) {
    const message = err.toJSON().message
    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_LOADING_VISITADOR,
        payload: {
          feedback: { message: 'Erro interno na API', result: false}
        }
      })
    }
    if(message.includes('401')) {

      localStorage.setItem('token', '')
      data_auth.jwt_token = '';

      return dispatch({ type: types.ERR_LOADING_VISITADOR, payload: { feedback: 'Usuário não autenticado, realizar o login' } });
    } 
    if(message.includes('Network Error')) {

      return dispatch({ type: types.ERR_LOADING_VISITADOR, payload: { feedback: 'Problema ao se conectar à API contate o administrador' } });
    }
    return dispatch({ type: types.ERR_LOADING_VISITADOR, payload: { feedback: 'ERRO. Contate o administrador' } });
  }
};



export const register_visitado = async (dispatch, form_user) => {
  dispatch({ type: types.TRYING_REGISTRATION_VISITADOR });
  try {
    const response = await (
      await axios({
        method: "post",
        url: srv_api + "visitado",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: "bearer "+ localStorage.getItem('token')
        },
        data: form_user,
      })
    ).data;

    dispatch({
      type: types.SUCCESS_REGISTRATION_VISITADOR,
      payload: {
        visitado: response.visitado
      },
    });
  } catch (err) {
    console.log(err.toJSON())
    const message = err.toJSON().message
    if(message.includes('422')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITADOR,
        payload: { 
          feedback: "Visitado ja cadastrado na base de dados"
        }
      })
    }
    if(message.includes('401')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITADOR,
        payload: { 
          feedback: "Usuário não autenticado, realize o login novamente!"
        }
      })
    }
    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITADOR,
        payload: { 
          feedback: "ERRO na API contate o administrador "
        }
      })
    }
    if (message.includes("Network Error")) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITADOR,
        payload: {
          feedback: "ERRO ao se conectar à API contate o administrador",
        },
      });
    }
    return dispatch({
      type: types.ERR_REGISTRATION_VISITADOR,
      payload: { 
        feedback: "ERRO. Contate o administrador" 
      },
    });
  }
};

export const update_visitado = async (dispatch, form_visitado, id) => { 
  dispatch({type: types.TRYING_UPDATE_VISITADO })
  const config = {
    method: 'POST',
    url: srv_api + "visitado/"+id,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: "bearer "+ localStorage.getItem('token')
    },
    data: form_visitado
  }
  try {
    const response = await ( await axios(config)).data

    dispatch({
      type: types.SUCCESS_UPDATE_VISITADO, 
      payload: { 
        visitado: {...response}
      }
    })
  } catch(err) {
    console.log(err)
    const message = err.toJSON().message
    console.log(message)
    dispatch({
      type: types.ERR_UPDATE_VISITADO
    })
  }
}