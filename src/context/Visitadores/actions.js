import * as types from "./types";
import axios from "axios";
import { srv_api, data_auth } from "../Auth/data_auth";
const { jwt_token } = data_auth;

export const loadVisitadores = (disptach) => {
  disptach({ type: types.LOADING_VISITADORES });
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
    disptach({
      type: types.SUCCESS_LOADING_VISITADORES,
      payload: { visitadores: { ...respose } },
    });
  } catch (err) {
    disptach({ type: types.ERR_LOADING_VISITADORES, payload: { err } });
  }
};
