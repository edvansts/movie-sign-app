import React from "react";
import { useTrendingMovies } from "./api/get-trending-movies";
import {
  Box,
  FlatList,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
} from "native-base";
import { getImageUrl } from "../../../utils/image";

const TrendingMovies = () => {
  const { isLoading, trendingMovies } = useTrendingMovies();

  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Filmes em alta
      </Heading>

      {isLoading && !trendingMovies ? (
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
      ) : (
        <FlatList
          data={trendingMovies}
          horizontal
          height="128px"
          width="100%"
          renderItem={({ item: movie }) => (
            <Box
              key={movie._id}
              width="84px"
              height="128px"
              backgroundColor="white"
              mr="6"
            >
              <Image
                src={getImageUrl(movie.posterImage)}
                alt={movie.title}
                w="100%"
                height="100%"
              />
            </Box>
          )}
        />
      )}
    </Flex>
  );
};

export { TrendingMovies };
