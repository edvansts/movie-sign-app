import { HStack, Skeleton } from "native-base";
import React from "react";

function LoadingMovies() {
  return (
    <HStack space="6">
      <Skeleton
        width="84px"
        height="128px"
        startColor="background.100"
        endColor="gray.100"
      />
      <Skeleton
        width="84px"
        height="128px"
        startColor="background.100"
        endColor="gray.100"
      />
      <Skeleton
        width="84px"
        height="128px"
        startColor="background.100"
        endColor="gray.100"
      />
      <Skeleton
        width="84px"
        height="128px"
        startColor="background.100"
        endColor="gray.100"
      />
    </HStack>
  );
}

export { LoadingMovies };
