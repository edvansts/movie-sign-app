import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type FeedStackParamList = {
  feed: undefined;
  "movie-details": { movieId: string };
};

export type FeedStackNavigationProps =
  NativeStackNavigationProp<FeedStackParamList>;
