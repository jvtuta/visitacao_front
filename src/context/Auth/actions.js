import * as types from "./types";
import { ip_srv } from "./data_auth";
import axios from "axios";

export const Authenticate_user = async (dispatch, form_user) => {
  dispatch({ type: types.TRYING_AUTHENCATION });

  try {
    const response = await (await axios({
      method: 'post',
      url: ip_srv+'/api/login',
      headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
           'Accept': 'application/json'
      },
      data: form_user

    })).data;
    //retornar função para ser executada no componente para uma estabiliade maior entre as requisições da api
    dispatch({
      type: types.SUCCESS_AUTHENTICATION,
      payload: { ...response }, //api deve retornar jwt_token e user caso dê sucesso
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ERR_LOGON, payload: err });
  }
};
