import { createStackNavigator } from "@react-navigation/stack";
import DeviceLogList from "../screens/DeviceLogList";
import DevicesList from "../screens/DevicesList";
import Login from "../screens/Login";
import { RootStackParamList, AuthStackParamList } from "../types";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as authAction from "../store/actions/auth";

const DeviceStackNavigator = createStackNavigator<RootStackParamList>();

export const DeviceNavigator = () => {
  return (
    <DeviceStackNavigator.Navigator initialRouteName={"DevicesList"}>
      <DeviceStackNavigator.Screen
        name="DevicesList"
        component={DevicesList}
        options={{
          headerRight: () => {
            const dispatch = useDispatch()
            return (
              <MaterialCommunityIcons
                style={{ marginHorizontal: 10 }}
                name="logout"
                size={24}
                color="black"
                onPress={() => {
                  dispatch(authAction.logout());

                }}
              />
            );
          },
        }}
      />
      <DeviceStackNavigator.Screen
        name="DeviceLogList"
        component={DeviceLogList}
      />
    </DeviceStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName={"Login"}>
      <AuthStackNavigator.Screen name="Login" component={Login} />
    </AuthStackNavigator.Navigator>
  );
};
