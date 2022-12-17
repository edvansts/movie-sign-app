import React from "react";
import { HStack, Skeleton } from "native-base";
import { useWindowDimensions } from "react-native";

const SKELETON_DIMENSIONS = {
  width: 84,
  height: 128
}

function LoadingMovies() {
  const { width } = useWindowDimensions();

  const skeletonQuantity = Math.floor(width / SKELETON_DIMENSIONS.width);

  const skeletons = Array.from(Array(skeletonQuantity).keys());

  return (
    <HStack space="6">
      {skeletons.map((value) => (
        <Skeleton
          key={value}
          startColor="background.100"
          endColor="gray.100"
          width={`${SKELETON_DIMENSIONS.width}px`}
          height={`${SKELETON_DIMENSIONS.height}px`}
        />
      ))}
    </HStack>
  );
}

export { LoadingMovies };
