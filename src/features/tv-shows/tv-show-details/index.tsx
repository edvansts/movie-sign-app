import { useRoute } from '@react-navigation/native';
import { HomeRouteProps } from '../../../config/navigator/home/types';
import { useGetTvShowById } from './api/get-tv-show-by-id';
import dayjs from 'dayjs';
import { Box, ScrollView, VStack, Heading, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CachedImage } from '../../../components/cached-image';
import { getImageUrl } from '../../../utils/image';
import { useGetTvShowSeasons } from './api/get-tv-show-seasons';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { FontAwesome } from '@expo/vector-icons';

function TvShowDetails() {
  const { params } = useRoute<HomeRouteProps<'tv-show-details'>>();

  const tvShowId = params.tvShowId;

  const [seasonSelected, setSeasonSelected] = useState('Select Season');
  const [selected, setSelected] = useState('');

  const { isLoading, tvShow } = useGetTvShowById(tvShowId);
  const { isLoading: isLoadingSeasons, tvShowSeasons } =
    useGetTvShowSeasons(tvShowId);

  const seasons: string[] = tvShowSeasons?.map((season) => season.name);
  const releaseDate = dayjs(tvShow?.firstAirDate).format('YYYY');
  const genresMap = tvShow?.genres.map((gen) => gen.name);

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
            <VStack>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={seasons}
                boxStyles={{
                  backgroundColor: '#413B6B',
                  alignItems: 'center',
                  borderRadius: 5,
                  borderWidth: 0,
                }}
                inputStyles={{ color: 'white' }}
                dropdownStyles={{ backgroundColor: '#413B6B', borderWidth: 0 }}
                dropdownTextStyles={{ color: 'white' }}
                arrowicon={
                  <FontAwesome name="chevron-down" size={12} color={'white'} />
                }
                placeholder="Select Season"
                search={false}
              />
            </VStack>
          </VStack>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export { TvShowDetails };
