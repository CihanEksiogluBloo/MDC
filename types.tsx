import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  DevicesList: undefined;
  DeviceLogList: DeviceLogListScreenParams;
};

export type AuthStackParamList = {
    Login: LoginScreenParams;
  };

export type DrawerParamList = {
  DevicesNavigator: undefined;
}
// Params of Screens

export type LoginScreenParams = {};
export type DeviceLogListScreenParams = {
  deviceNo:number
};

// Components

// Custom Object Types
export type DeviceNo = [a: string];

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
