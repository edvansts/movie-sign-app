import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed } from "../../../screens/feed";

import type { FeedStackParamList } from "./types";
import { MovieDetails } from "../../../features/movies/movie-details";

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="feed"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="feed" component={Feed} />
      <Stack.Screen name="movie-details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export { FeedStackNavigator };
