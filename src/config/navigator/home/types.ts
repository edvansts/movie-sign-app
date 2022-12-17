import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { FeedStackParamList } from "../feed/types";

export type HomeTabsParamList = {
  home: NavigatorScreenParams<FeedStackParamList>;
  user: undefined;
  myList: undefined;
};

export type HomeTabsNavigationProps =
  BottomTabNavigationProp<HomeTabsParamList>;
