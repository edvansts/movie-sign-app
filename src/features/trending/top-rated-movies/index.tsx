import React from "react";
import { useGetTopRatedMovies } from "./api/get-trending-movies-top-rated";
import { Box, FlatList, Flex, Heading, Pressable } from "native-base";
import { getImageUrl } from "../../../utils/image";
import { LoadingHorizontalStack } from "../../../components/loading-horizontal-stack";
import { CachedImage } from "../../../components/cached-image";
import type { TopRatedMoviesData } from "./api/types";
import { useHomeStackNavigator } from "../../../hooks/use-home-stack-navigator";

const TopRatedMovies = () => {
  const { isLoading, topRatedMovies } = useGetTopRatedMovies();

  const { navigate } = useHomeStackNavigator();

  const navigateToMovie = (movie: TopRatedMoviesData) => {
    navigate('movie-details', { movieId: movie._id })
  }

  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Top Filmes
      </Heading>

      {isLoading && !topRatedMovies ? (
        <LoadingHorizontalStack />
      ) : (
        <FlatList
          data={topRatedMovies}
          horizontal
          height="128px"
          width="100%"
          renderItem={({ item: movie }) => (
            <Pressable onPress={() => navigateToMovie(movie)}>
              <Box
                key={movie._id}
                width="84px"
                height="128px"
                backgroundColor="white"
                mr="6"
              >
                <CachedImage
                  src={getImageUrl(movie.posterImage)}
                  alt={movie.title}
                  cacheKey={movie._id}
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

export { TopRatedMovies };
