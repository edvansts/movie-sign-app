import { useRoute } from "@react-navigation/native";
import { HomeRouteProps } from "../../../config/navigator/home/types";
import { useGetTvShowById } from "./api/get-tv-show-by-id";
import dayjs from "dayjs";
import { Box, ScrollView, VStack, Heading, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { CachedImage } from "../../../components/cached-image";
import { getImageUrl } from "../../../utils/image";
import { useGetTvShowSessions } from "./api/get-tv-show-seasons";

function TvShowDetails() {
  const { params } = useRoute<HomeRouteProps<"tv-show-details">>();

  const tvShowId = params.tvShowId;

  const { isLoading, tvShow } = useGetTvShowById(tvShowId);
  const { isLoading: isLoadingSeasons, tvShowSeasons } =
    useGetTvShowSessions(tvShowId);


  const releaseDate = dayjs(tvShow?.firstAirDate).format("YYYY");
  const genresMap = tvShow?.genres.map(gen => gen.name)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && !tvShow ? (
        <Box></Box>
      ) : (
        <ScrollView
          backgroundColor="background.100"
          style={{ flex: 1, padding: 3 }}
          showsVerticalScrollIndicator={false}
        >
          <VStack marginX="4" space="2.5">
            <Box alignItems="center">
              <Heading fontSize={"md"}>{tvShow.name}</Heading>
              <Box
                key={tvShow.name}
                width="164px"
                height="256px"
                backgroundColor="white"
                mr="6"
                margin="2"
              >
                <CachedImage
                  src={getImageUrl(tvShow.posterImage)}
                  alt={tvShow.name}
                  cacheKey={tvShow.name}
                  w="100%"
                  height="100%"
                />
              </Box>
              <Text fontSize="sm">{releaseDate} (BR)</Text>
              <Text fontSize="sm">{genresMap.join(', ')}</Text>

              <Text mt="2.5" fontSize="sm">
                {tvShow.overview}
              </Text>
            </Box>
          </VStack>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export { TvShowDetails };
