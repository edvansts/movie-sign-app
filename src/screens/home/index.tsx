import React from "react";
import { Box, Text } from "native-base";
import { TrendingMovies } from "../../features/trending-movies";

const Home = () => {
  return (
    <Box flex={1}>
      <TrendingMovies />
    </Box>
  );
};

export { Home };
