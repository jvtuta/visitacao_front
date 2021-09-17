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
    window.location.reload()
    dispatch({});
  }
};
