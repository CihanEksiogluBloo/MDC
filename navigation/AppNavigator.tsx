import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, DeviceNavigator } from "./index";

let isAuth = true;
let didTryAutoLogin = true;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {!isAuth && didTryAutoLogin && <DeviceNavigator />}
      {isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
