import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import { ApplicationState } from "../../store/reducers";

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
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );
  return (
    <View style={styles().general}>
      <TouchableOpacity style={styles().container} onPress={onPress}>
        <View style={styles().titlesContainer}>
          <Text style={styles().titleText}>Devices No: </Text>
          <Text style={styles().titleText}>Full Name: </Text>
          <Text style={styles().titleText}>Location: </Text>
          <Text style={styles().titleText}>Last Seen:</Text>
        </View>
        <View>
          <Text style={styles().valueText}>{cihaz_no}</Text>
          <Text style={styles().valueText}>{ad_soyad}</Text>
          <Text style={styles().valueText}>{konum}</Text>
          <Text style={styles().valueText}>{son_haberlesme}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginVertical: 5 }}>
        <Button
          color={Colors[userTheme].primary}
          title={` ${cihaz_no} Log List`}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default DeviceContainer;

const styles = () => {
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );
 return StyleSheet.create({
  general: {
    margin: 10,
    padding: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
    borderColor: Colors[userTheme].componentBG,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    padding: 7,
    borderWidth: 1,
    width: "85%",
  },
  titlesContainer: {},
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors[userTheme].title
  },
  valueText: {
    fontSize: 16,
    color: Colors[userTheme].value,
  },
})
};
