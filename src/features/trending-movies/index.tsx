import React from "react";
import { useTrendingMovies } from "./api/useTrendingMovies";
import { Box, FlatList, HStack, Image, Skeleton } from "native-base";

const TrendingMovies = () => {
  const { isLoading, trendingMovies } = useTrendingMovies();

  if (isLoading && !trendingMovies) {
    return (
      <HStack space="6">
        <Skeleton
          width="84px"
          height="128px"
          startColor="background.100"
          endColor="gray.100"
        />
        <Skeleton
          width="84px"
          height="128px"
          startColor="background.100"
          endColor="gray.100"
        />
        <Skeleton
          width="84px"
          height="128px"
          startColor="background.100"
          endColor="gray.100"
        />
        <Skeleton
          width="84px"
          height="128px"
          startColor="background.100"
          endColor="gray.100"
        />
      </HStack>
    );
  }

  return (
    <FlatList
      data={trendingMovies}
      horizontal
      renderItem={({ item: movie }) => (
        <Box
          key={movie._id}
          width="84px"
          height="128px"
          backgroundColor="white"
          mr="6"
        >
          <Image
            src={movie.posterImage}
            alt={movie.title}
            w="100%"
            height="100%"
          />
        </Box>
      )}
    />
  );
};

export { TrendingMovies };
