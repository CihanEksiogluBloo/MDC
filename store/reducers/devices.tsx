import { DeviceAction } from "../actions/devices";
import { Device, DeviceTypeInterface } from "../redux-types";

type initialStateTypes = {
  devicesList: Device[];
  devicesLogList: DeviceTypeInterface[];
  deviceLastData: any[];
  error: string | undefined;
};

const initialState = {
  devicesList: [],
  devicesLogList: [],
  deviceLastData: [],
  error: undefined,
};

export default (
  state: initialStateTypes = initialState,
  action: DeviceAction
) => {
  switch (action.type) {
    case "USER_DEVICE_SEARCH":
      return {
        ...state,
        devicesList: action.payload.devices,
      };

    case "USER_DEVICE_LOGLIST":
      const devicesLogListResult = action.payload.devicesLogList;
      const objectKey = +Object.keys(devicesLogListResult)[0];
      const cihaz_tur = devicesLogListResult[objectKey].cihaz_tur;

      return {
        devicesLogList: cihaz_tur,
        deviceLastData: devicesLogListResult.cihaz_last_data,
      };
    case "ON_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
