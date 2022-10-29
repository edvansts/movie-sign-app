import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SCREENS } from "./constants";
import { Home } from "../../screens/home";
import { SignIn } from "../../screens/sign-in";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.signIn}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREENS.signIn} component={SignIn} />
        <Stack.Screen name={SCREENS.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigator };
