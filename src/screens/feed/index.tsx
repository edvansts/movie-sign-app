import React, { useState } from "react";
import {
  Box,
  Container,
  Icon,
  Input,
  Modal,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { TrendingMovies } from "../../features/trending/trending-movies";
import { TrendingTvShows } from "../../features/trending/trending-tv-shows";
import { SafeAreaView } from "react-native-safe-area-context";
import { MoviesInTheatres } from "../../features/trending/movies-in-theatres";
import { TopRatedMovies } from "../../features/trending/top-rated-movies";
import { TopRatedTvShows } from "../../features/trending/top-rated-tv-shows";
import { TvShowsOnTheAir } from "../../features/trending/tv-shows-on-the-air";
import { FontAwesome } from "@expo/vector-icons";
import { SearchModal } from "../../features/feed/search-modal";

const Feed = () => {
  const [isSearchModalOpened, setIsSearchModalOpened] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} safeAreaTop backgroundColor="background.100">
        <ScrollView>
          <VStack space={3.5} w="100%" px="3">
            <Pressable
              backgroundColor="primary.100"
              width="85%"
              maxWidth="320px"
              padding={2}
              borderRadius={8}
              mx="auto"
              onPress={() => setIsSearchModalOpened(true)}
            >
              <Box flexDirection="row">
                <Icon
                  as={FontAwesome}
                  name="search"
                  color="text.200"
                  size={5}
                  marginRight={1}
                />

                <Text fontSize="sm">Pesquisar</Text>
              </Box>
            </Pressable>

            <TrendingMovies />
            <TrendingTvShows />
            <MoviesInTheatres />
            <TvShowsOnTheAir />
            <TopRatedMovies />
            <TopRatedTvShows />
          </VStack>
        </ScrollView>
      </Box>

      {isSearchModalOpened && (
        <SearchModal
          isOpen={isSearchModalOpened}
          onClose={() => setIsSearchModalOpened(false)}
        />
      )}
    </SafeAreaView>
  );
};

export { Feed };
