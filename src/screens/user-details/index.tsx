import { SafeAreaView } from "react-native-safe-area-context";
import { useUserStore } from "../../store/user";
import { useTokenStore } from "../../store/token";
import { Box, ScrollView, Text, VStack, Heading, Button } from "native-base";

const UserDetails = () => {
  const { user, setUser } = useUserStore();
  const { setToken } = useTokenStore();

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
                backgroundColor="darkBlue.800"
                width="39%"
                borderRadius={150}
              >
                <Text fontSize="7xl">{user.name[0]}</Text>
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
