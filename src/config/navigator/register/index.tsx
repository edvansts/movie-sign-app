import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../../../screens/sign-in";
import { Register } from "../../../screens/register";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="signIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export { RegisterStackNavigator };
