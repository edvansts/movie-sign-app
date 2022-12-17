import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { HomeStackParamList } from "./types";
import { MovieDetails } from "../../../features/movies/movie-details";
import { FeedTabsNavigator } from "../feed";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="feed"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="feed" component={FeedTabsNavigator} />
      <Stack.Screen name="movie-details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator };
