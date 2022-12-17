import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../config/navigator/home/types";

const useHomeStackNavigator = () => {
  return useNavigation<HomeStackNavigationProps>();
};

export { useHomeStackNavigator };
