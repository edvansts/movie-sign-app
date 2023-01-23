import { Box, Skeleton, VStack } from "native-base";
import React from "react";

function LoadingMovie() {
  return (
    <VStack
      backgroundColor="background.100"
      alignItems="center"
      flex={1}
      padding="2"
    >
      <Skeleton
        startColor="background.100"
        endColor="gray.100"
        width="60%"
        height="24px"
      />

      <Skeleton
        startColor="background.100"
        endColor="gray.100"
        width="164px"
        height="256px"
        margin="2"
      />

      <Skeleton
        startColor="background.100"
        endColor="gray.100"
        width="20%"
        height="24px"
      />

      <Skeleton
        startColor="background.100"
        endColor="gray.100"
        width="100%"
        height="200px"
        m="3"
      />

      <Skeleton
        startColor="background.100"
        endColor="gray.100"
        mr='auto'
        width="50%"
        height="24px"
      />
    </VStack>
  );
}

export { LoadingMovie };
