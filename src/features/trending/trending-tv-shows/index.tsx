import React from "react";

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
import { useTrendingTvShows } from "./api/get-trending-tv-shows";

const TrendingTvShows = () => {
  const { isLoading, trendingTvShows } = useTrendingTvShows();

  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Séries em alta
      </Heading>

      {isLoading && !trendingTvShows ? (
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
          data={trendingTvShows}
          horizontal
          renderItem={({ item: tvShow }) => (
            <Box
              key={tvShow._id}
              width="84px"
              height="128px"
              backgroundColor="white"
              mr="6"
            >
              <Image
                src={getImageUrl(tvShow.posterImage)}
                alt={tvShow.name}
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

export { TrendingTvShows };