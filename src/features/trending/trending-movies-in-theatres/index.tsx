import React from "react";
import { Box, FlatList, Flex, Heading, Pressable } from "native-base";
import { TrendingMovieData } from "../trending-movies/api/types";
import { LoadingHorizontalStack } from "../../../components/loading-horizontal-stack";
import { getImageUrl } from "../../../utils/image";
import { CachedImage } from "../../../components/cached-image";
import { useHomeStackNavigator } from "../../../hooks/use-home-stack-navigator";
import { useTrendingMoviesInTheatres } from "./api/get-trending-movies-in-theatres";

const TrendingMoviesInTheatres = () => {
  const { isLoading, trendingMoviesInTheatres } = useTrendingMoviesInTheatres();
  const { navigate } = useHomeStackNavigator();

  const navigateToMovie = (movie: TrendingMovieData) => {
    navigate("movie-details", { movieId: movie._id });
  };

  return (
    <Flex>
      <Heading fontSize="lg" color="white" mb="3.5">
        Filmes em cartaz
      </Heading>

      {isLoading && !trendingMoviesInTheatres ? (
        <LoadingHorizontalStack />
      ) : (
        <FlatList
          data={trendingMoviesInTheatres}
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

export {TrendingMoviesInTheatres}
