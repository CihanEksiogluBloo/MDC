import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import Color from "../../constants/Colors";
import { ApplicationState } from "../../store/reducers";

interface InputParams {
  Label: "Email" | "Password" | "Device No:";
  Value: string;
  Required: boolean;
  ErrorText: string;
  setValue: (value: string) => void;
  secureTextEntry?: boolean;
}

const TextInputComp: React.FC<InputParams> = ({
  ErrorText,
  Label,
  Required,
  Value,
  setValue,
  secureTextEntry,
}) => {
  let isValid: boolean = true;

  if (Label === "Email") {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Label === "Email" && !emailRegex.test(Value.toLowerCase())) {
      isValid = false;
    }
  }

  return (
    <View style={styles().formControl}>
      <Text style={styles().label}>{Label}</Text>

      <TextInput
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        style={styles().input}
        value={Value}
        onChangeText={(e) => setValue(e)}
      />
      {!isValid && Required && Value != "" && (
        <View style={styles().errorContainer}>
          <Text style={styles().errorMessage}>{ErrorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = () => {
  const userTheme = useSelector(
    (state: ApplicationState) => state.theme.userTheme
  );

  return StyleSheet.create({
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: Color[userTheme].greyish,
      borderBottomWidth: 1,
      color: Colors[userTheme].label,
      fontWeight: "bold",
    },
    formControl: { width: "100%" },
    label: {
      marginVertical: 8,
      color: Colors[userTheme].title,
      fontWeight: "bold",
    },
    errorMessage: {
      color: "red",
      fontSize: 13,
    },
    errorContainer: {
      marginVertical: 5,
    },
  });
};

export default TextInputComp;
