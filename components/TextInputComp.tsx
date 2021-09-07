import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Color from "../constants/Colors";

interface InputParams {
  Label: "Email" | "Password";
  Value: string;
  Required: boolean;
  ErrorText: string;
  setValue: (value: string) => void;
  secureTextEntry: boolean;
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
    <View style={styles.formControl}>
      <Text style={styles.label}>{Label}</Text>

      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={Value}
        onChangeText={(e) => setValue(e)}
      />
      {!isValid && Required && Value != "" && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{ErrorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Color.greyish,
    borderBottomWidth: 1,
  },
  formControl: { width: "100%" },
  label: { marginVertical: 8 },
  errorMessage: {
    color: "red",
    fontSize: 13,
  },
  errorContainer: {
    marginVertical: 5,
  },
});

export default TextInputComp;
