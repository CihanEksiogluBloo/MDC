import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import TextInputComp from "../components/Inputs/TextInputComp";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/actions/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { ApplicationState } from "../store/reducers";

const errorMessage = "This field must be filled in correctly.";

const Login: React.FC<NativeStackScreenProps<AuthStackParamList, "Login">> =
  () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useDispatch();

    const userTheme = useSelector(
      (state: ApplicationState) => state.theme.userTheme
    );

    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.label}>Login</Text>
          <View style={styles.inputs}>
            <TextInputComp
              ErrorText={errorMessage}
              Label="Email"
              Required={true}
              Value={email}
              setValue={setEmail}
              secureTextEntry={false}
            />
            <TextInputComp
              ErrorText={errorMessage}
              Label="Password"
              Required={true}
              Value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => {
                dispatch(authActions.login(email, password));
              }}
              color={Colors[userTheme].primary}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

export default Login;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    width: "90%",
    padding: 30,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  inputs: {
    width: "90%",
    margin: 10,
  },
  label: {
    fontSize: 30,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
});
