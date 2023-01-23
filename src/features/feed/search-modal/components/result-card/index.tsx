import dayjs from "dayjs";
import { Box, Heading, HStack, ScrollView, Text } from "native-base";
import React from "react";
import ReadMore from "react-native-read-more-text";
import { CachedImage } from "../../../../../components/cached-image";
import { getImageUrl } from "../../../../../utils/image";
import { Result } from "../../api/types";

interface ResultCardProps {
  result: Result;
}

const ResultCard = ({ result }: ResultCardProps) => {
  const {
    name,
    overview,
    releaseDate: releaseDateString,
    posterPath,
    title,
  } = result;

  const releaseDate = releaseDateString
    ? dayjs(releaseDateString).format("DD/MM/YYYY")
    : "";

  const normalizedName = name || title || "";

  return (
    <HStack
      marginTop={2.5}
      marginX="2.5"
      borderRadius={5}
      borderBottomRadius={5}
    >
      <Box width={140} height={140} mr="1">
        <CachedImage
          src={getImageUrl(posterPath)}
          alt={normalizedName}
          cacheKey={normalizedName}
          w="100%"
          height="100%"
          borderTopLeftRadius={5}
          borderBottomLeftRadius={5}
        />
      </Box>
      <Box width="55%" height="100%" margin={1}>
        <Heading fontSize="sm">{normalizedName}</Heading>
        <Text fontSize="xs" opacity={0.6}>
          {releaseDate}
        </Text>
        <ScrollView>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={(handlePress) => (
              <Text color="secondary.200" marginTop="1" onPress={handlePress}>
                Ler mais
              </Text>
            )}
            renderRevealedFooter={(handlePress) => (
              <Text color="secondary.200" marginTop="1" onPress={handlePress}>
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

export { ResultCard };
