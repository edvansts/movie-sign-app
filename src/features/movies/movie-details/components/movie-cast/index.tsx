import React from "react";
import { Box, FlatList, Heading, Text } from "native-base";
import { useGetMovieCast } from "../../api/get-movie-cast";
import { LoadingHorizontalStack } from "../../../../../components/loading-horizontal-stack";
import { CachedImage } from "../../../../../components/cached-image";

interface MovieCastProps {
  movieId: string;
}

const MovieCast = ({ movieId }: MovieCastProps) => {
  const { isLoading, cast } = useGetMovieCast(movieId);

  return (
    <Box p="1" backgroundColor="background.200" borderRadius="2.5">
      {isLoading && !cast ? (
        <LoadingHorizontalStack />
      ) : (
        <FlatList
          data={cast}
          horizontal
          width="100%"
          renderItem={({ item: cast }) => (
            <Box
              key={cast._id}
              width="84px"
              backgroundColor="transparent"
              mr="6"
            >
              <CachedImage
                src={cast.profileImage}
                alt={cast.name}
                cacheKey={cast._id}
                w="100%"
                height="128px"
                placeholder={{ height: 128, width: 84, text: cast.name }}
              />

              <Heading fontSize="xs">{cast.name}</Heading>
              <Text fontSize="xs">{cast.character}</Text>
            </Box>
          )}
        />
      )}
    </Box>
  );
};

export { MovieCast };
