import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Puritan_400Regular,
  Puritan_700Bold,
} from "@expo-google-fonts/puritan";
import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import { SignIn } from "./src/screens/sign-in";
import { theme } from "./src/styles";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loadedFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Puritan_400Regular,
    Puritan_700Bold,
  });

  const appIsReady = loadedFonts;

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <SignIn />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
  },
});
