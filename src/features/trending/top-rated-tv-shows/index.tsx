import React from "react";

import { Box, FlatList, Flex, Heading, Pressable } from "native-base";
import { getImageUrl } from "../../../utils/image";
import { useTopRatedTvShows } from "./api/get-top-rated-tv-shows";
import { CachedImage } from "../../../components/cached-image";
import { LoadingHorizontalStack } from "../../../components/loading-horizontal-stack";
import { TopRatedTvShowsData } from "./api/types";
import { useHomeStackNavigator } from "../../../hooks/use-home-stack-navigator";

const TopRatedTvShows = () => {
  const { isLoading, topRatedTvShows } = useTopRatedTvShows();

  const { navigate } = useHomeStackNavigator();

  const navigateToTvShow = (tvShow: TopRatedTvShowsData) => {
    navigate("tv-show-details", { tvShowId: tvShow._id });
  };
  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Top Séries
      </Heading>

      {isLoading && !topRatedTvShows ? (
        <LoadingHorizontalStack />
      ) : (
        <FlatList
          data={topRatedTvShows}
          horizontal
          renderItem={({ item: tvShow }) => (
            <Pressable onPress={() => navigateToTvShow(tvShow)}>
              <Box
                key={tvShow._id}
                width="84px"
                height="128px"
                backgroundColor="white"
                mr="6"
              >
                <CachedImage
                  src={getImageUrl(tvShow.posterImage)}
                  alt={tvShow.name}
                  cacheKey={tvShow._id}
                  w="100%"
                  height="100%"
                />
              </Box>
            </Pressable>
          )}
        />
      )}
    </Flex>
  );
};

export { TopRatedTvShows };
