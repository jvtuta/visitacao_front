import * as types from "./types";
import axios from "axios";
import { srv_api } from "../Auth/data_auth";

export const load_visitacao = async (dispatch) => {
  dispatch({ type: types.LOADING_VISITACOES });
  const config = {
    method: "GET",
    url: srv_api + "visitacao",
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
      payload: { visitacoes: { ...response } },
    });
  } catch (err) {
    dispatch({});
  }
};

export const registrar_visitacao = async ( dispatch , form_data ) => {
  dispatch({type: types.TRYING_REGISTRATION_VISITACOES})
  const config = {
    method: "POST",
    url: srv_api + "visitacao",
    headers: {
      Authorization: "bearer " + localStorage.getItem('token'),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: form_data
  }
  try {
    const response = await ( await axios(config) ).data;
    dispatch({
      type: types.SUCCESS_REGISTRATION_VISITACOES,
      feedback: 'Visitação cadastrada com sucesso!',
      payload: { visitacoes: response }
    })
  } catch ( err ) {
    dispatch({
      type: types.ERR_REGISTRATION_VISITACOES
    })
  }
}


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
      payload: { visitacoes:{...response} },
    });
  } catch (err) {
    console.log(err.toJSON())
    const message = err.toJSON().message
    if(message.includes('422')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITACOES,
        payload: { feedback: "Visitacao ja cadastrado na base de dados"}
      })
    }
    if(message.includes('500')) {
      return dispatch({
        type: types.ERR_REGISTRATION_VISITACOES,
        payload: { feedback: "ERRO na API contate o administrador "}
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
      payload: { feedback: "ERRO. Contate o administrador" },
    });
  }
};
