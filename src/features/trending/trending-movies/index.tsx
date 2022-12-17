import React from "react";
import { useTrendingMovies } from "./api/get-trending-movies";
import { Box, FlatList, Flex, Heading, Pressable } from "native-base";
import { getImageUrl } from "../../../utils/image";
import { LoadingMovies } from "./components/loading-movies";
import { CachedImage } from "../../../components/cached-image";
import type { TrendingMovieData } from "./api/types";
import { useHomeStackNavigator } from "../../../hooks/use-home-stack-navigator";

const TrendingMovies = () => {
  const { isLoading, trendingMovies } = useTrendingMovies();

  const { navigate } = useHomeStackNavigator();

  const navigateToMovie = (movie: TrendingMovieData) => {
    navigate('movie-details', { movieId: movie._id })
  }

  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Filmes em alta
      </Heading>

      {isLoading && !trendingMovies ? (
        <LoadingMovies />
      ) : (
        <FlatList
          data={trendingMovies}
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

export { TrendingMovies };
