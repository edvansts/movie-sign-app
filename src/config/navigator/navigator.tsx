import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../../screens/home";
import { SignIn } from "../../screens/sign-in";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='signIn'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='signIn' component={SignIn} />
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigator };
