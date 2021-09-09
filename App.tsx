import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
