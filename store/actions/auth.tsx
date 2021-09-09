import AsyncStorage from "@react-native-async-storage/async-storage";
import { userLogin, userDatas } from "../redux-types";
import { Dispatch } from "react";

//Types
type LogoutAction = { readonly type: "LOGOUT" };
type SET_DID_TRY_AlAction = { readonly type: "SET_DID_TRY_AL" };

export interface AuthenticateAction {
  readonly type: "AUTHENTICATE";
  payload: userDatas;
}
export interface ErrorAction {
  readonly type: "ON_ERROR";
  payload: any;
}

export type AuthAction =
  | SET_DID_TRY_AlAction
  | AuthenticateAction
  | LogoutAction
  | ErrorAction;

const saveDataToStorage = (app_token: string, userId: number) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      app_token,
      userId,
    })
  );
};

export const authenticate = (userId: number, app_token: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: "AUTHENTICATE", payload: { userid: userId, app_token } });
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await fetch("http://ems.lande.com.tr/api/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const resData: userLogin = await response.json();

      if ("error" in resData) {
        throw new Error(resData.error);
      }

      saveDataToStorage(resData.app_token, resData.userid);

      dispatch({
        type: "AUTHENTICATE",
        payload: { userid: resData.userid, app_token: resData.app_token },
      });
    } catch (error) {
      dispatch({
        type: "ON_ERROR",
        payload: error,
      });
    }
  };
};

export const logout = (): LogoutAction => {
  AsyncStorage.removeItem("userData");
  return { type: "LOGOUT" };
};

export const setDidTryAL = (): SET_DID_TRY_AlAction => {
  return { type: "SET_DID_TRY_AL" };
};
