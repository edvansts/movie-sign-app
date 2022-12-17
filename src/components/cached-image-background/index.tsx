import React from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  ImageURISource,
} from "react-native";
import { useImageCache } from "../../hooks/use-image-cache";

interface CacheImageBackgroundProps extends ImageBackgroundProps {
  cacheKey?: string;
}

const CacheImageBackground = ({
  cacheKey,
  source,
  ...props
}: CacheImageBackgroundProps) => {
  const uri =
    typeof source === "string"
      ? (source as string)
      : (source as ImageURISource).uri;

  const { imageUri } = useImageCache({ uri, cacheKey });

  return <ImageBackground {...props} source={{ uri: imageUri }} />;
};

export { CacheImageBackground };
