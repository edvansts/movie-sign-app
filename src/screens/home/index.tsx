import React from "react";
import { Box, ScrollView, Text, VStack } from "native-base";
import { TrendingMovies } from "../../features/trending/trending-movies";
import { TrendingTvShows } from "../../features/trending/trending-tv-shows";
import { useHomeTabsNavigator } from "../../hooks/useHomeTabsNavigator";

const Home = () => {
  const navigate = useHomeTabsNavigator();

  return (
    <Box flex={1} safeAreaTop backgroundColor="background.100">
      <ScrollView>
        <VStack space={3.5}  w="100%" px="3">
          <TrendingMovies />
          <TrendingTvShows />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export { Home };
