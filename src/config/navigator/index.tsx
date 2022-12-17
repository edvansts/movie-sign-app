import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTokenStore } from "../../store/token";
import { useUserStore } from "../../store/user";
import { HomeStackNavigator } from "./home";
import { RegisterStackNavigator } from "./register";

const RootNavigator = () => {
  const token = useTokenStore();
  const user = useUserStore();

  return (
    <NavigationContainer>
      {token && user ? (
        <HomeStackNavigator />
      ) : (
       <RegisterStackNavigator />
      )}
    </NavigationContainer>
  );
};

export { RootNavigator };
