import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  DevicesList: undefined;
  DeviceLogList: undefined;
};

export type AuthStackParamList = {
    Login: LoginScreenParams;
  };

// Params of Screens

export type LoginScreenParams = {};

// Components

// Custom Object Types

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
