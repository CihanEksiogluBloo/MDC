import { combineReducers } from "redux";
import authReducer from "./auth";
import devicesReducer from "./devices";

import themeReducer from "./theme";

const rootReducer = combineReducers({
  auth: authReducer,
  devices: devicesReducer,
  theme: themeReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
