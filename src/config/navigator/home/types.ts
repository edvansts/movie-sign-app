import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import type { FeedTabsParamList } from "../feed/types";

export type HomeStackParamList = {
  feed: NavigatorScreenParams<FeedTabsParamList>;
  "movie-details": { movieId: string };
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;

 export type HomeRouteProps<RouteName extends keyof HomeStackParamList> = RouteProp<
  HomeStackParamList,
  RouteName
>;
