import { Box, Heading, HStack, ScrollView, Text, useTheme } from 'native-base';
import React from 'react';
import { CachedImage } from '../../../../../components/cached-image';
import { getImageUrl } from '../../../../../utils/image';
import { Episode } from '../../api/types';
import ReadMore from 'react-native-read-more-text';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import dayjs from 'dayjs';

interface SeasonEpisodeProps {
  episode: Episode;
}

const SeasonEpisode = ({ episode }: SeasonEpisodeProps) => {
  const { airDate, name, overview = '', posterImage, episodeNumber } = episode;
  const { colors } = useTheme();
  const releaseDate = dayjs(airDate).format('DD/MM/YYYY');

  return (
    <HStack
      marginTop={2.5}
      backgroundColor="#413B6B"
      borderRadius={5}
      borderBottomRadius={5}
    >
      <Box key={name} width={140} height={140} mr="1">
        <CachedImage
          src={getImageUrl(posterImage)}
          alt={name}
          cacheKey={name}
          w="100%"
          height="100%"
          borderTopLeftRadius={5}
          borderBottomLeftRadius={5}
        />
      </Box>
      <Box width="55%" height="100%" margin={1}>
        <Heading fontSize="sm">
          {episodeNumber} - {name}
        </Heading>
        <Text fontSize="xs" opacity={0.6}>
          {releaseDate}
        </Text>
        <ScrollView>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={(handlePress) => (
              <Text
                style={{ color: colors.secondary[100], marginTop: 5 }}
                onPress={handlePress}
              >
                Ler mais
              </Text>
            )}
            renderRevealedFooter={(handlePress) => (
              <Text
                style={{ color: colors.secondary[100], marginTop: 5 }}
                onPress={handlePress}
              >
                Esconder
              </Text>
            )}
          >
            <Text fontSize="xs">{overview}</Text>
          </ReadMore>
        </ScrollView>
      </Box>
    </HStack>
  );
};

export { SeasonEpisode };
