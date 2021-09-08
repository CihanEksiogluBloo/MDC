import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../../constants/Colors";
import CustomText from "./CustomText";

interface DeviceLogListParams {
  t: number;
  min: number;
  max: number;
  input: string;
  title: string;
  symbol: string;
}

const DeviceLogListComp: React.FC<DeviceLogListParams> = ({
  t,
  min,
  max,
  input,
  title,
  symbol,
}) => {
  return (
    <View style={styles.general}>
      <View style={styles.LabelContainer}>
        <Text numberOfLines={1} style={styles.Label}>
          {title}
        </Text>
      </View>
      <CustomText Title="t">{t}</CustomText>
      <CustomText Title="Min">
        {min}
        {symbol}
      </CustomText>
      <CustomText Title="Max">
        {max}
        {symbol}
      </CustomText>
      <CustomText Title="Input">{input}</CustomText>
    </View>
  );
};

export default DeviceLogListComp;

const styles = StyleSheet.create({
  general: {
    width: "90%",
    height: "10%",
  },
  Label: {
    fontWeight: "bold",
    color: Colors.label,
  },
  LabelContainer: {
    padding: 5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    marginBottom: 7,
    alignItems: "center",
  },
});
