import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import { ApplicationState } from "../../store/reducers";

interface CustomText {
  children: React.ReactNode;
  Title: string;
}

const CustomText: React.FC<CustomText> = ({ children, Title }) => {
  return (
    <View style={styles().general}>
      <Text style={styles().title}>{Title}: </Text>
      <Text>{children}</Text>
    </View>
  );
};

export default CustomText;

const styles = () => {
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );

  return StyleSheet.create({
    general: { flexDirection: "row", borderBottomWidth: 1, width: "100%" },
    title: { fontWeight: "bold", color: Colors[userTheme].title },
  });
};
