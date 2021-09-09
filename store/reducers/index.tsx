import { combineReducers } from 'redux';
import authReducer from "./auth"
import devicesReducer from "./devices"

const rootReducer = combineReducers({
    auth: authReducer,
    devices: devicesReducer,
  });

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };