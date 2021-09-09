import {
  userDeviceData,
  DeviceLogListResData,
  Device,
  userDeviceResData,
} from "../redux-types";
import { Dispatch } from "react";

//Types

export interface userDeviceSearch_Action {
  readonly type: "USER_DEVICE_SEARCH";
  payload: { devices: Device[] };
}

export interface userDeviceLogList_Action {
  readonly type: "USER_DEVICE_LOGLIST";
  payload: { devicesLogList: DeviceLogListResData };
}

export interface ErrorAction {
  readonly type: "ON_ERROR";
  payload: any;
}

export type DeviceAction =
  | ErrorAction
  | userDeviceSearch_Action
  | userDeviceLogList_Action;

export const userDeviceSearch = (
  app_token: string,
  userid: string,
  cihaz_no: string
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    const response = await fetch(
      "http://ems.lande.com.tr/api/userdeviceslist",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          app_token,
          userid,
          cihaz_no: [cihaz_no],
        }),
      }
    );

    const resData: userDeviceData = await response.json();

    if ("error" in resData) {
      throw new Error(resData.error);
    }

    dispatch({
      type: "USER_DEVICE_SEARCH",
      payload: { devices: resData.cihaz_no },
    });
  };
};

export const userDeviceLogList = (
  app_token: string,
  userid: string,
  cihaz_no: string
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    try {
      const response = await fetch(
        "http://ems.lande.com.tr/api/userdevicesloglist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app_token,
            userid,
            cihaz_no: [cihaz_no],
            limit: 1,
          }),
        }
      );

      const resData: DeviceLogListResData = await response.json();

      dispatch({
        type: "USER_DEVICE_LOGLIST",
        payload: { devicesLogList: resData },
      });
    } catch (error) {
      dispatch({
        type: "ON_ERROR",
        payload: error,
      });
    }
  };
};
