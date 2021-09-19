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
