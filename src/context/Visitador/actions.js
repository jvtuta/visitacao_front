import * as types from "./types";
import axios from "axios";
import { srv_api } from "../Auth/data_auth";

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
    if(err.toJSON().message.includes('401')) {
      return dispatch({ type: types.ERR_LOADING_VISITADOR, payload: { feedback: 'Usuário não autenticado, realizar o login' } });
    }
    return dispatch({ type: types.ERR_LOADING_VISITADOR, payload: { feedback: err } });
  }
};
