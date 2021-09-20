import * as types from "./types";
import axios from "axios";
import { srv_api } from "../Auth/data_auth";
import { data_auth } from "../Auth/data_auth";



export const load_visitador = async (dispatch) => {
  dispatch({ type: types.LOADING_VISITADOR });
  const config = {
    method: "GET",
    url: srv_api + "visitador",
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
      payload: { visitadores: [...response] },
    });
  } catch (err) {
    const message = err.toJSON().message
    
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



export const register_visitador = async (dispatch, form_user) => {
  dispatch({ type: types.TRYING_REGISTRATION_VISITADOR });
  try {
    const response = await (
      await axios({
        method: "post",
        url: srv_api + "visitador",
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
      payload: {visitador:
        response },
    });
  } catch (err) {
    console.log(err.toJSON())
    const message = err.toJSON().message
    if(message.includes('422')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITADOR,
        payload: { feedback: "Usuário ja cadastrado na base de dados"}
      })
    }
    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITADOR,
        payload: { feedback: "ERRO na API contate o administrador "}
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
      payload: { feedback: "ERRO. Contate o administrador" },
    });
  }
};
