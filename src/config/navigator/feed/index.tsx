import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../../../screens/feed";
import type { FeedTabsParamList } from "./types";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "native-base";

const Tabs = createBottomTabNavigator<FeedTabsParamList>();

const TABS_PROPS: Record<
  keyof FeedTabsParamList,
  { icon: keyof typeof FontAwesome.glyphMap }
> = {
  home: { icon: "home" },
  // myList: { icon: "th-large" },
  profile: { icon: "user" },
};

const FeedTabsNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tabs.Navigator
      initialRouteName="home"
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
        tabBarStyle: {
          backgroundColor: colors.background[100],
          borderTopColor: colors.background[100],
        },
      })}
    >
      {/* <Tabs.Screen name="myList" component={Feed} /> */}
      <Tabs.Screen name="home" component={Feed} />
      <Tabs.Screen name="profile" component={Feed} />
    </Tabs.Navigator>
  );
};

export { FeedTabsNavigator };
