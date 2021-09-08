import { USER_DEVICE_SEARCH } from "../actions/devices";
import { Device } from "../redux-types";

type initialStateTypes = {
  devicesList: Device | [];
};

const initialState: initialStateTypes = {
  devicesList: [],
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

    default:
      return state;
  }
};
