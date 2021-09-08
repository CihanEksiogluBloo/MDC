import AsyncStorage from "@react-native-async-storage/async-storage";
import { userLogin } from "../redux-types";

export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";

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
  return (dispatch: any) => {
    dispatch({ type: AUTHENTICATE, payload:{userId, app_token} });
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
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
      type: AUTHENTICATE,
      payload: { userId: resData.userid, token: resData.userid },
    });
  };
};

export const logout = () => {
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};
export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};
