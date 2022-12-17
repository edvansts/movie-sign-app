import { useNavigation } from "@react-navigation/native";
import { HomeTabsNavigationProps } from "../config/navigator";

const useHomeTabsNavigator = () => {
  return useNavigation<HomeTabsNavigationProps>();
};

export { useHomeTabsNavigator };
