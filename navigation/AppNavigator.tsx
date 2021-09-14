import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, SettingDrawer } from "./index";
import { useSelector } from "react-redux";
import StartupScreen from "./StartupScreen";
import { ApplicationState } from "../store/reducers/index";

const AppNavigator: React.FC = () => {
  //auth
  const isAuth = useSelector<ApplicationState>(
    (state) => !!state.auth.app_token
  );
  const didTryAutoLogin = useSelector<ApplicationState>(
    (state) => state.auth.didTryAutoLogin
  );

  return (
    <NavigationContainer>
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {isAuth && <SettingDrawer />}
    </NavigationContainer>
  );
};

export default AppNavigator;
