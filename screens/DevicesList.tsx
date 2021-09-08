import React, { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import TextInputComp from "../components/Inputs/TextInputComp";
import * as devicesActions from "../store/actions/devices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { Device } from "../store/redux-types";
import DeviceContainer from "../components/UI/DeviceContainer";
import Colors from "../constants/Colors";

const DevicesList: React.FC<
  NativeStackScreenProps<RootStackParamList, "DevicesList">
> = ({ navigation }) => {
  const [deviceNo, setDeviceNo] = useState<string>("100000291");

  //redux constants
  const app_token = useSelector((state) => state.auth.app_token);
  const userId = useSelector((state) => state.auth.userId);
  const devicesList: Device = useSelector((state) => state.devices.devicesList);
  const dispatch = useDispatch();

  const deviceSearchActionHandler = () => {
    dispatch(devicesActions.userDeviceSearch(app_token, userId, deviceNo));
  };
  const deviceLogListPressHandler = (deviceNo: number) => {
    navigation.navigate("DeviceLogList", { deviceNo: deviceNo });
  };

  return (
    <View>
      <View style={styles.inputContainer}>
      <TextInputComp
        ErrorText={"Text"}
        Label="Device No:"
        Required={true}
        Value={deviceNo}
        setValue={setDeviceNo}
      />
      <View style={{margin:10, width:"50%", alignSelf:"center"}}>
       <Button color={Colors.primary} title="Search" onPress={deviceSearchActionHandler} />
       </View>
      </View>
      {devicesList.length > 0 && <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"#11324D"}}> Devices List </Text>}

     
      <View>
        <FlatList
          data={devicesList}
          keyExtractor={(item) => item.cihaz_no.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <DeviceContainer
                  ad_soyad={item.ad_soyad}
                  cihaz_no={item.cihaz_no}
                  konum={item.konum}
                  son_haberlesme={item.son_haberlesme}
                  onPress={() => deviceLogListPressHandler(item.cihaz_no)}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DevicesList;

const styles = StyleSheet.create({
  inputContainer:{
    margin:10,
    padding:10,
    borderRadius:10,
    backgroundColor:Colors.componentBG

  }

});
