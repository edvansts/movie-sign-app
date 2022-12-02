import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../../../screens/home";
import type { HomeTabsParamList } from "./types";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "native-base";

const Tabs = createBottomTabNavigator<HomeTabsParamList>();

const TABS_PROPS: Record<
  keyof HomeTabsParamList,
  { icon: keyof typeof FontAwesome.glyphMap }
> = {
  home: { icon: "home" },
  myList: { icon: "th-large" },
  user: { icon: "user" },
};

const HomeTabsNavigator = () => {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={"home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome
                name={TABS_PROPS[route.name].icon}
                size={size * (focused ? 1.3 : 1)}
                color={color}
              />
            );
          },
          headerShown: false,
          tabBarActiveTintColor: colors.secondary[100],
          tabBarInactiveTintColor: colors.white,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: colors.background[100], borderTopColor: colors.background[100] },
        })}
      >
        <Tabs.Screen name="myList" component={Home} />
        <Tabs.Screen name="home" component={Home} />
        <Tabs.Screen name="user" component={Home} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export { HomeTabsNavigator };
