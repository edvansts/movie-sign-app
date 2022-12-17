import React from "react";
import { ScrollView, Heading, Box, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetMovieById } from "./api/get-movie-by-id";
import { useRoute } from "@react-navigation/native";
import { HomeRouteProps } from "../../../config/navigator/home/types";
import { LoadingMovie } from "./components/loading-movie";
import { Text } from "native-base";

function MovieDetails() {
  const { params } = useRoute<HomeRouteProps<'movie-details'>>()

  const movieId = params.movieId;

  const { isLoading, movie } = useGetMovieById(movieId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? <LoadingMovie /> : <ScrollView
        backgroundColor="background.100"
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack marginX='4' space='2.5'>
          <Box>
            <Heading>{movie.title}</Heading>
            <Text fontSize='sm'>{movie.releaseDate}</Text>
          </Box>
        </VStack>
      </ScrollView>}
    </SafeAreaView>
  );
}

export { MovieDetails };
