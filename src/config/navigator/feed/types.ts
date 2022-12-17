import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type FeedTabsParamList = {
  home: undefined;
  profile: undefined;
  myList: undefined;
};

export type FeedTabsNavigationProps =
  BottomTabNavigationProp<FeedTabsParamList>;
