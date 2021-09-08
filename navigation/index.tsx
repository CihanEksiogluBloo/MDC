import { createStackNavigator } from "@react-navigation/stack";
import DeviceLogList from "../screens/DeviceLogList";
import DevicesList from "../screens/DevicesList";
import Login from "../screens/Login";
import { RootStackParamList, AuthStackParamList } from "../types";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as authAction from "../store/actions/auth";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const DeviceStackNavigator = createStackNavigator<RootStackParamList>();

export const DeviceNavigator = () => {
  return (
    <DeviceStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleAlign: "center",
      }}
      initialRouteName={"DevicesList"}
    >
      <DeviceStackNavigator.Screen
        name="DevicesList"
        component={DevicesList}
        options={{
          headerRight: () => {
            const dispatch = useDispatch();
            return (
              <MaterialCommunityIcons
                style={{ marginHorizontal: 10 }}
                name="logout"
                size={24}
                color={Colors.accent}
                onPress={() => {
                  dispatch(authAction.logout());
                }}
              />
            );
          },
          headerTitle: "Devices List",
        }}
      />
      <DeviceStackNavigator.Screen
        name="DeviceLogList"
        component={DeviceLogList}
        options={{ headerTitle: "Device Log List" }}
      />
    </DeviceStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName={"Login"}>
      <AuthStackNavigator.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
    </AuthStackNavigator.Navigator>
  );
};
