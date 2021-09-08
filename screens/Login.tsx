import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import TextInputComp from "../components/Inputs/TextInputComp";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth"


const errorMessage = "This field must be filled in correctly.";

const Login: React.FC<NativeStackScreenProps<AuthStackParamList, "Login">> =
  () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useDispatch();

    return (
      <View>
        <Text>Login</Text>
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
        <Button
          title="Go"
          onPress={() => {
            dispatch(authActions.login(email,password))
          }}
        />
      </View>
    );
  };

export default Login;

const styles = StyleSheet.create({});
