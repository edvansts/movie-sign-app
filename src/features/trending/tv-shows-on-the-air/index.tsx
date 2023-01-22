import React from "react";

import { Box, FlatList, Flex, Heading, Pressable } from "native-base";
import { getImageUrl } from "../../../utils/image";
import { useTvShowsOnTheAir } from "./api/get-tv-shows-on-the-air";
import { CachedImage } from "../../../components/cached-image";
import { LoadingHorizontalStack } from "../../../components/loading-horizontal-stack";
import { TvShowsOnTheAirData } from "./api/types";
import { useHomeStackNavigator } from "../../../hooks/use-home-stack-navigator";

const TvShowsOnTheAir = () => {
  const { isLoading, tvShowsOnTheAir } = useTvShowsOnTheAir();

  const { navigate } = useHomeStackNavigator();

  const navigateToTvShow = (tvShow: TvShowsOnTheAirData) => {
    navigate("tv-show-details", { tvShowId: tvShow._id });
  };
  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Séries no ar
      </Heading>

      {isLoading && !tvShowsOnTheAir ? (
        <LoadingHorizontalStack />
      ) : (
        <FlatList
          data={tvShowsOnTheAir}
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

export { TvShowsOnTheAir };
