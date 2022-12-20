import React from "react";
import { ScrollView, Heading, Box, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetMovieById } from "./api/get-movie-by-id";
import { useRoute } from "@react-navigation/native";
import { HomeRouteProps } from "../../../config/navigator/home/types";
import { LoadingMovie } from "./components/loading-movie";
import { Text } from "native-base";
import dayjs from "dayjs";
import { Rating } from "./components/rating";
import { MovieCast } from "./components/movie-cast";

function MovieDetails() {
  const { params } = useRoute<HomeRouteProps<"movie-details">>();

  const movieId = params.movieId;

  const { isLoading, movie } = useGetMovieById(movieId);

  const releaseDate = dayjs(movie?.releaseDate).format("DD/MM/YYYY");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && !movie ? (
        <LoadingMovie />
      ) : (
        <ScrollView
          backgroundColor="background.100"
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <VStack marginX="4" space="2.5">
            <Box>
              <Heading fontSize={"md"}>{movie.title}</Heading>
              <Text fontSize="sm">{releaseDate} (BR)</Text>

              <Text mt="2.5" fontSize="sm">
                {movie.overview}
              </Text>
            </Box>

            <Box>
              <Rating grade={movie.rating?.grade} />
            </Box>

            <Box>
              <Heading fontSize="md" mb="2.5">
                Elenco Principal
              </Heading>

              <MovieCast movieId={movieId} />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export { MovieDetails };
