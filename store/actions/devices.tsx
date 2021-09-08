import { userDeviceData, DeviceLogListResData } from "../redux-types";

export const USER_DEVICE_SEARCH = "USER_DEVICE_SEARCH";
export const USER_DEVICE_LOGLIST = "USER_DEVICE_LOGLIST";

export const userDeviceSearch = (
  app_token: string,
  userid: string,
  cihaz_no: string
) => {
  return async (dispatch: any) => {
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
      type: USER_DEVICE_SEARCH,
      payload: { devices: resData.cihaz_no },
    });
  };
};

export const userDeviceLogList = (
  app_token: string,
  userid: string,
  cihaz_no: string
) => {
  return async (dispatch: any) => {
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

    if ("error" in resData) {
      throw new Error(resData.error);
    }

    dispatch({
      type: USER_DEVICE_LOGLIST,
      payload: { devicesLogList: resData },
    });
  };
};
