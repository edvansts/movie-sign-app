import React from "react";
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CachedImage } from "../cached-image";
import { CacheImageBackground } from "../cached-image-background";

const HEADER_HEIGHT = 200;

interface AnimatedHeaderProps {
  animatedValue: Animated.Value;
  backgroundImage?: string;
}

const AnimatedHeader = ({
  animatedValue,
  backgroundImage,
}: AnimatedHeaderProps) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
      }}
    >
      {backgroundImage && (
        <CachedImage
          cacheKey={backgroundImage}
          source={{ uri: backgroundImage }}
          resizeMode="cover"
          style={{
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        />
      )}
    </Animated.View>
  );
};

export { AnimatedHeader };
