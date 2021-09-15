import * as types from "./types";
import axios from "axios";
import { srv_api, data_auth } from "../Auth/data_auth";

const { jwt_token } = data_auth;
//
export const load_visitacao = async (dispatch) => {
  dispatch({ type: types.LOADING_VISITACAO });
  const config = {
      method: 'GET',
      url: srv_api + 'visitacao',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': 'bearer '+ jwt_token
      }
  }
  try {
    const response = await ( await axios(config) ).data
    dispatch({ type: types.SUCCESS_VISITACAO, payload: {
        visitacoes: {...response}, loading: false
     }})
  } catch (err) {
      console.log(err)
    dispatch({ type: types.ERR_VISITACAO, payload: { feedback: err } });
  }
};

//cadastrar visitacoes
export const cadastrar_visitacao = (dispatch, form_visitacao) => {
  dispatch({ type: types.TRYING_REGISTRATION });
};
