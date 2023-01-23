import { SafeAreaView } from "react-native-safe-area-context";
import { useUserStore } from "../../store/user";
import { useTokenStore } from "../../store/token";
import { Box, ScrollView, Text, VStack, Button } from "native-base";

const UserDetails = () => {
  const { user, setUser } = useUserStore();
  const { setToken } = useTokenStore();

  function handleColorsBackground(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const numberColor = Math.floor(Math.random() * (max - min) + min);
    return `darkBlue.${numberColor}00`
  }

  function handleArrayName(names: string[]) {
    if (names.length > 2) {
      names.pop();
      handleArrayName(names);
    }
    return names;
  }

  function handleInitialsNames(name: string) {
    name = name.replace(/\s(de|da|dos|das)\s/g, " "); // Remove os de,da, dos,das.
    const nameArray = name.split(" ");
    const newNames = handleArrayName(nameArray);
    if (newNames.length < 2) return newNames[0][0].toUpperCase();

    return newNames[0][0].toUpperCase() + newNames[1][0].toUpperCase();
  }

  const initalsName = handleInitialsNames(user.name);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} safeAreaTop backgroundColor="background.100">
        <ScrollView>
          <Box alignItems="center" justifyContent="center">
            <VStack space={5} w="100%" px="3" alignItems="center">
              <Box
                alignItems="center"
                justifyContent="center"
                height="150"
                bg={{
                  linearGradient: {
                    colors: [handleColorsBackground(1, 10),handleColorsBackground(1, 10)],
                    start: [0, 0],
                    end: [1, 0],
                  },
                }}
                width="39%"
                borderRadius={150}
              >
                <Text fontSize="6xl">{initalsName}</Text>
              </Box>

              <Text fontSize="2xl">{user.name}</Text>
              <Text fontSize="md">@{user.username}</Text>

              <Button
                onPress={() => {
                  setUser(undefined);
                  setToken(undefined);
                }}
                w="50%"
                bgColor="secondary.200"
                _text={{
                  fontSize: "md",
                  fontWeight: 700,
                }}
                marginTop="10"
              >
                Sair
              </Button>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export { UserDetails };
