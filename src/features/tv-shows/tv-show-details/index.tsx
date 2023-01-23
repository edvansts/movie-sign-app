import { useRoute } from '@react-navigation/native';
import { HomeRouteProps } from '../../../config/navigator/home/types';
import { useGetTvShowById } from './api/get-tv-show-by-id';
import dayjs from 'dayjs';
import {
  Box,
  ScrollView,
  VStack,
  Heading,
  Text,
  useTheme,
  HStack,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CachedImage } from '../../../components/cached-image';
import { getImageUrl } from '../../../utils/image';
import { useGetTvShowSeasons } from './api/get-tv-show-seasons';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { FontAwesome } from '@expo/vector-icons';
import { EpisodesList } from './components/episodes-list';
import { LoadingTvShow } from './components/loading-tv-show';

interface KeyValueObject {
  key: string;
  value: string;
}

function TvShowDetails() {
  const { params } = useRoute<HomeRouteProps<'tv-show-details'>>();

  const tvShowId = params.tvShowId;

  const { colors } = useTheme();

  const [selectedSeasonId, setSelectedSeasonId] = useState('');

  const { isLoading, tvShow } = useGetTvShowById(tvShowId);

  const { isLoading: isLoadingSeasons, tvShowSeasons } =
    useGetTvShowSeasons(tvShowId);

  const seasons =
    tvShowSeasons?.map<KeyValueObject>((season) => ({
      key: season._id,
      value: season.name,
    })) || [];

  const releaseDate = dayjs(tvShow?.firstAirDate).format('YYYY');
  const genresMap = tvShow?.genres.map((gen) => gen.name);
  const selectedSeason = tvShowSeasons?.find(
    ({ _id }) => _id === selectedSeasonId
  );
  console.log(selectedSeason);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && !tvShow ? (
        <LoadingTvShow />
      ) : (
        <ScrollView
          backgroundColor="background.100"
          style={{ flex: 1, padding: 3 }}
          showsVerticalScrollIndicator={false}
        >
          <VStack marginX="4" space="2.5">
            <Box alignItems="center">
              <Heading fontSize={'md'}>{tvShow.name}</Heading>
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
            {!isLoadingSeasons && seasons && (
              <VStack>
                <SelectList
                  setSelected={(seasonId) => setSelectedSeasonId(seasonId)}
                  data={seasons}
                  boxStyles={{
                    backgroundColor: colors.primary[100],
                    alignItems: 'center',
                    borderRadius: 5,
                    borderWidth: 0,
                  }}
                  defaultOption={seasons[0]}
                  inputStyles={{ color: colors.white }}
                  dropdownStyles={{
                    backgroundColor: colors.primary[100],
                    borderWidth: 0,
                  }}
                  dropdownTextStyles={{ color: colors.white }}
                  arrowicon={
                    <FontAwesome
                      name="chevron-down"
                      size={12}
                      color={colors.white}
                    />
                  }
                  placeholder="Selecionar temporada"
                  search={false}
                  save="key"
                />
              </VStack>
            )}
            {selectedSeason && (
              <EpisodesList episodes={selectedSeason.episodes} />
            )}
          </VStack>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export { TvShowDetails };
