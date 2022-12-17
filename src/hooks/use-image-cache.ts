import React, { useEffect, useLayoutEffect, useState } from "react";
import { useIsMounted } from "usehooks-ts";
import {
  getInfoAsync,
  cacheDirectory,
  downloadAsync,
  makeDirectoryAsync,
} from "expo-file-system";
import {
  removeFileExtension,
  removeHttpPrefixFromUri,
} from "../utils/transform";
import { IMAGE_CACHE_DIRECTORY } from "../constants/file-system";

interface useCacheProps {
  uri: string;
  cacheKey?: string;
}

const useImageCache = ({ uri, cacheKey: cacheKeyProps }: useCacheProps) => {
  const isMounted = useIsMounted();
  const [imageUri, setImageUri] = useState(null);

  const normalizedCacheUri = removeHttpPrefixFromUri(removeFileExtension(uri));

  const cacheKey = cacheKeyProps || normalizedCacheUri;

  const filesystemURI = `${IMAGE_CACHE_DIRECTORY}${cacheKey}`;

  useEffect(() => {
    loadImage({ fileURI: filesystemURI });
  }, []);

  const loadImage = async ({ fileURI }) => {
    try {
      const metadata = await getInfoAsync(fileURI);

      if (!metadata.exists && isMounted()) {
        setImageUri(uri);

        await downloadAsync(uri, fileURI);
        return;
      }

      if (isMounted()) {
        setImageUri(fileURI);
      }
    } catch (err) {
      setImageUri(uri);
    }
  };

  const checkImageCacheDirectory = async () => {
    try {
      const { exists, isDirectory } = await getInfoAsync(IMAGE_CACHE_DIRECTORY);

      if (isDirectory && exists) {
        return;
      }

      await makeDirectoryAsync(IMAGE_CACHE_DIRECTORY);
    } catch (err) {}
  };

  return {
    imageUri,
  };
};

export { useImageCache };
