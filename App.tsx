import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import AppNavigator from "./navigation/AppNavigator";
import authReducer from "./store/reducers/auth";
import devicesReducer from "./store/reducers/devices";

const rootReducer = combineReducers({
  auth: authReducer,
  devices: devicesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
