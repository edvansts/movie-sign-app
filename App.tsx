import React, { useEffect, useState } from "react";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import {
  Puritan_400Regular,
  Puritan_700Bold,
} from "@expo-google-fonts/puritan";

import { loadAsync, useFonts } from "expo-font";
import { theme } from "./src/styles";
import * as SplashScreen from "expo-splash-screen";
import { Box, NativeBaseProvider, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackNavigator } from "./src/config/navigator";
import { SwrProvider } from "./src/config/swr";

// API DOCS: https://movie-sign.onrender.com/docs

SplashScreen.preventAutoHideAsync();

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  function hideSplashScreen() {
    SplashScreen.hideAsync();
    setAppIsReady(true);
  }

  useEffect(() => {
    loadAsync({
      Puritan_400Regular,
      Puritan_700Bold,
      Inter_400Regular,
      Inter_500Medium,
      Inter_700Bold,
    }).then(hideSplashScreen);
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Box flex={1} backgroundColor="background.100">
        <SafeAreaView style={{ flex: 1 }}>
          <SwrProvider>
            <RootStackNavigator />
          </SwrProvider>
        </SafeAreaView>
      </Box>
    </NativeBaseProvider>
  );
}
