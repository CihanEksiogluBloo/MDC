import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import DeviceLogList from "../screens/DeviceLogList";
import DevicesList from "../screens/DevicesList";
import Login from "../screens/Login";
import {
  RootStackParamList,
  AuthStackParamList,
  DrawerParamList,
} from "../types";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../store/actions/auth";
import Colors from "../constants/Colors";
import { Button, Platform, SafeAreaView, View } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { ApplicationState } from "../store/reducers";
import * as ThemeActions from "../store/actions/theme";

const DeviceStackNavigator = createStackNavigator<RootStackParamList>();

const defaultScreenOption = (): Object => {
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );

  const result = {
    headerStyle: {
      backgroundColor:
        Platform.OS === "android"
          ? Colors[userTheme].primary
          : Colors[userTheme].label,
    },
    headerTintColor:
      Platform.OS === "android"
        ? Colors[userTheme].label
        : Colors[userTheme].primary,
    headerTitleAlign: "center",
    
  };
  return result;
};

export const DeviceNavigator = () => {
  const navigation = useNavigation();
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );
  return (
    <DeviceStackNavigator.Navigator
      screenOptions={{...defaultScreenOption(),cardStyle: {
        backgroundColor: Colors[userTheme].background
      }}}
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
                color={Colors[userTheme].accent}
                onPress={() => {
                  dispatch(authAction.logout());
                }}
              />
            );
          },
          headerTitle: "Devices List",
          headerLeft: () => {
            return (
              <Feather
                name="sidebar"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                size={24}
                color={Colors[userTheme].accent}
                style={{ marginHorizontal: 10 }}
              />
            );
          },
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

const Drawer = createDrawerNavigator<DrawerParamList>();

export const SettingDrawer = () => {
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
            <View style={{ flex: 1 }}>
              <DrawerItemList {...props} />

              <Button
                title="dark"
                color={Colors[userTheme].button}
                onPress={() => {
                  dispatch(
                    ThemeActions.changeThemeAction(
                      userTheme === "light" ? "dark" : "light"
                    )
                  );
                }}
              />
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen name="DevicesNavigator" component={DeviceNavigator} />
    </Drawer.Navigator>
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
