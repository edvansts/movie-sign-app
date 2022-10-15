import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SignIn } from "./src/screens/sign-in";

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171616",
    color: "white",
  },
});
