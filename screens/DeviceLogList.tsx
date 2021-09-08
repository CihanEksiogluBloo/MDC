import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import * as devicesAction from "../store/actions/devices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DeviceLogListComp from "../components/UI/DeviceLogListComp";

const DeviceLogList: React.FC<
  NativeStackScreenProps<RootStackParamList, "DeviceLogList">
> = ({ route }) => {
  const { deviceNo } = route.params;
  const dispatch = useDispatch();
  const app_token = useSelector((state) => state.auth.app_token);
  const userId = useSelector((state) => state.auth.userId);

  const devicesLogList = useSelector((state) => state.devices.devicesLogList);
  //const deviceLastData = useSelector((state) => state.devices.deviceLastData);


  useEffect(() => {
    const fetchDeviceLogList = () => {
      dispatch(
        devicesAction.userDeviceLogList(app_token, userId, deviceNo.toString())
      );
    };
    fetchDeviceLogList();
  }, []);

  return (
    <View>
      <FlatList
        data={devicesLogList}
        keyExtractor={(item) => item.input}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: "center", flex: 1, marginVertical: 10 }}>
              <DeviceLogListComp
                input={item.input}
                max={item.max}
                min={item.min}
                symbol={item.symbol}
                title={item.title}
                t={item.t}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default DeviceLogList;

const styles = StyleSheet.create({});
