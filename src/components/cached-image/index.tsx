import React from "react";
import { Image, IImageProps } from "native-base";
import { useImageCache } from "../../hooks/use-image-cache";
import { ImageURISource } from "react-native";

interface CachedImageProps extends IImageProps {
  cacheKey?: string;
  placeholder?: {
    width: number;
    height: number;
    text?: string;
  }
}

const CachedImage = ({ cacheKey, source, src, placeholder, ...props }: CachedImageProps) => {
  const uri = src
    ? src
    : typeof source === "string"
    ? (source as string)
    : (source as ImageURISource).uri;

  const { imageUri } = useImageCache({ cacheKey, uri, placeholder });

  return <Image {...props} source={{ uri: imageUri }} />;
};

export { CachedImage };
