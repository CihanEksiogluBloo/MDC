import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, DeviceNavigator } from "./index";
import { useSelector } from "react-redux";
import StartupScreen from "./StartupScreen";

const AppNavigator: React.FC = () => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
      {!isAuth && didTryAutoLogin && <DeviceNavigator />}
      {isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
