import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../../../screens/sign-in";
import { Register } from "../../../screens/register";
import { useTokenStore } from "../../../store/token";
import { HomeTabsNavigator } from "../home/home-tabs-navigator";
import { useUserStore } from "../../../store/user";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const token = useTokenStore();
  const user = useUserStore();

  return (
    <NavigationContainer>
      {token && user ? (
        <HomeTabsNavigator />
      ) : (
        <Stack.Navigator
          initialRouteName="signIn"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="signIn" component={SignIn} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export { RootStackNavigator };
