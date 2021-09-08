import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

interface CustomText {
  children: React.ReactNode;
  Title: string;
}

const CustomText: React.FC<CustomText> = ({ children, Title }) => {
  return (
    <View style={styles.general}>
      <Text style={styles.title}>{Title}: </Text>
      <Text>{children}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  general: { flexDirection: "row", borderBottomWidth: 1, width: "100%" },
  title: { fontWeight: "bold", color: Colors.title },
});
