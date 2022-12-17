import { useNavigation } from "@react-navigation/native";
import { FeedTabsNavigationProps } from "../config/navigator/feed/types";

const useFeedTabsNavigator = () => {
  return useNavigation<FeedTabsNavigationProps>();
};

export { useFeedTabsNavigator };
