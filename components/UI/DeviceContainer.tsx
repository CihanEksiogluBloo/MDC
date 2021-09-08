import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

interface DeviceContainerParams {
  cihaz_no: number;
  ad_soyad: string;
  konum: string;
  son_haberlesme: string;
  onPress: () => void;
}

const DeviceContainer: React.FC<DeviceContainerParams> = ({
  cihaz_no,
  son_haberlesme,
  konum,
  ad_soyad,
  onPress,
}) => {
  return (
    <View>
      <Text>{cihaz_no}</Text>
      <Text>{ad_soyad}</Text>
      <Text>{konum}</Text>
      <Text>{son_haberlesme}</Text>

      <Button title="Device LogList" onPress={onPress} />
    </View>
  );
};

export default DeviceContainer;

const styles = StyleSheet.create({});
