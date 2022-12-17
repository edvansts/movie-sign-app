import { useNavigation } from "@react-navigation/native";
import { FeedStackNavigationProps } from "../config/navigator/feed/types";

const useFeedStackNavigator = () => {
  return useNavigation<FeedStackNavigationProps>();
};

export default useFeedStackNavigator;
