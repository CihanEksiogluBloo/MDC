import { USER_DEVICE_SEARCH, USER_DEVICE_LOGLIST } from "../actions/devices";
import { Device, DeviceTypeInterface } from "../redux-types";

type initialStateTypes = {
  devicesList: Device | [];
  devicesLogList:  DeviceTypeInterface[];
  deviceLastData: any[];
};

const initialState: initialStateTypes = {
  devicesList: [],
  devicesLogList: [],
  deviceLastData: [],
};

export default (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case USER_DEVICE_SEARCH:
      return {
        ...state,
        devicesList: action.payload.devices,
      };
    case USER_DEVICE_LOGLIST:
      const devicesLogListResult = action.payload.devicesLogList;
      const objectKey = Object.keys(devicesLogListResult)[0];
      const cihaz_tur = devicesLogListResult[objectKey].cihaz_tur;

      return {
        devicesLogList: cihaz_tur,
        deviceLastData: devicesLogListResult.cihaz_last_data,
      };

    default:
      return state;
  }
};
