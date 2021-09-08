import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import * as devicesAction from "../store/actions/devices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const DeviceLogList: React.FC<
  NativeStackScreenProps<RootStackParamList, "DeviceLogList">
> = ({ route }) => {
  const { deviceNo } = route.params;
  const dispatch = useDispatch();
  const app_token = useSelector((state) => state.auth.app_token);
  const userId = useSelector((state) => state.auth.userId);

  const devicesLogList = useSelector((state) => state.devices.devicesLogList);
  //const deviceLastData = useSelector((state) => state.devices.deviceLastData);

  const fetchDeviceLogList = () => {
    dispatch(
      devicesAction.userDeviceLogList(app_token, userId, deviceNo.toString())
    );
  };

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
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.t}</Text>
              <Text>{item.min}</Text>
              <Text>{item.max}</Text>
              <Text>{item.input}</Text>
              <Text>{item.title}</Text>
              <Text>{item.symbol}</Text>
            </View>
          );
        }}
      />
      <Button title="Go" onPress={fetchDeviceLogList} />
    </View>
  );
};

export default DeviceLogList;

const styles = StyleSheet.create({});
