import * as types from "./types";
import axios from "axios";
import { srv_api, data_auth } from "../Auth/data_auth";
const { jwt_token } = data_auth;

export const load_visitador = async (dispatch) => {
  dispatch({ type: types.LOADING_VISITADOR });
  const config = {
    method: "GET",
    url: srv_api + "visitador",
    headers: {
      Authorization: "bearer " + jwt_token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    const respose = await(await axios(config)).data;
    dispatch({
      type: types.SUCCESS_LOADING_VISITADOR,
      payload: { visitadores: { ...respose } },
    });
  } catch (err) {
    dispatch({ type: types.ERR_LOADING_VISITADOR, payload: { err } });
  }
};
