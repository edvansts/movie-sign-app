import React, { useRef } from "react";
import { Text } from "native-base";
import { Animated, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedHeader } from "../../../components/animated-header";

function MovieDetails() {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AnimatedHeader animatedValue={offset} />

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
      ></ScrollView>
    </SafeAreaView>
  );
}

export { MovieDetails };
