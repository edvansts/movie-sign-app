import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../../screens/home";
import { SignIn } from "../../screens/sign-in";
import type { RootStackParamList } from "./types";
import { useTokenStore } from "../../store/token";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const token = useTokenStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? "home" : "signIn"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigator };
