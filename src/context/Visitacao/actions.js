import * as types from "./types";
import axios from "axios";
import { srv_api, data_auth } from "../Auth/data_auth";
const { jwt_token } = data_auth;

export const load_visitacao = async (dispatch) => {
  dispatch({ type: types.LOADING_VISITACOES });
  const config = {
    method: "GET",
    url: srv_api + "visitacao",
    headers: {
      Authorization: "bearer " + jwt_token,
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
    console.log(err);
    dispatch({});
  }
};
