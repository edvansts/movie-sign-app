import React from "react";
import { z, TypeOf } from "zod";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { requiredError } from "../../constants";

import {
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import {
  Box,
  useTheme,
  Button,
  Image,
  Text,
  FormControl,
  Input,
  Container,
  Link,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePostRegister } from "../../api/post-register";

const REGISTER_SCHEMA = z.object({
  username: z.string().min(1, requiredError),
  email: z.string().min(1, requiredError),
  password: z.string().min(1, requiredError),
  name: z.string().min(1, requiredError),
});

type IRegisterForm = TypeOf<typeof REGISTER_SCHEMA>;

const Register = () => {
  const { colors } = useTheme();

  const { control, handleSubmit } = useForm<IRegisterForm>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      name: "",
    },
    resolver: zodResolver(REGISTER_SCHEMA),
  });

  const { error, isLoading, register } = usePostRegister();

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    const { password, username, email, name } = data;

    try {
      register({ username, email, name, password });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Box flex={1}>
          <Box
            padding={5}
            paddingBottom={20}
            bg={{
              linearGradient: {
                colors: [colors.background[100], colors.hover[100]],
                start: [0, 0.9],
                end: [0, 1],
              },
            }}
          >
            <Image
              source={require("../../../assets/images/cineme.png")}
              maxHeight="150px"
              maxWidth="500px"
              alt="logo"
              alignSelf="center"
              my="4"
              resizeMode="cover"
            />
            <Text
              fontFamily="heading"
              fontSize="4xl"
              fontWeight="bold"
              marginBottom="-5"
            >
              Crie sua conta!
            </Text>

            {!!error && (
              <Text color="danger.500" my="2">
                {" "}
                - {error.message}
              </Text>
            )}

            <Link marginBottom="5" color="text.200" mt={4}>
              Já tem uma conta? | Faça login
            </Link>

            <Text marginLeft="1">Nome</Text>
            <Controller
              control={control}
              name="name"
              render={({
                field: { onChange, ...field },
                formState: { errors },
              }) => (
                <FormControl isRequired isInvalid={!!errors.name?.message}>
                  <Input
                    {...field}
                    onChangeText={onChange}
                    isFullWidth
                    marginBottom="2"
                    autoCapitalize="none"
                    InputLeftElement={
                      <Container ml="3">
                        <FontAwesome
                          name="user"
                          color={colors.primary[300]}
                          size={16}
                        />
                      </Container>
                    }
                  />
                </FormControl>
              )}
            />

            <Text marginLeft="1">Email</Text>
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, ...field },
                formState: { errors },
              }) => (
                <FormControl isRequired isInvalid={!!errors.name?.message}>
                  <Input
                    {...field}
                    onChangeText={onChange}
                    isFullWidth
                    marginBottom="2"
                    autoCapitalize="none"
                    InputLeftElement={
                      <Container ml="3">
                        <AntDesign
                          name="mail"
                          size={16}
                          color={colors.primary[300]}
                        />
                      </Container>
                    }
                  />
                </FormControl>
              )}
            />

            <Text marginLeft="1">Nome de usuário</Text>
            <Controller
              control={control}
              name="username"
              render={({
                field: { onChange, ...field },
                formState: { errors },
              }) => (
                <FormControl isRequired isInvalid={!!errors.name?.message}>
                  <Input
                    {...field}
                    onChangeText={onChange}
                    isFullWidth
                    marginBottom="2"
                    autoCapitalize="none"
                    InputLeftElement={
                      <Container ml="3">
                        <FontAwesome
                          name="user"
                          color={colors.primary[300]}
                          size={16}
                        />
                      </Container>
                    }
                  />
                </FormControl>
              )}
            />

            <Text marginLeft="1">Senha</Text>
            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, ...field },
                formState: { errors },
              }) => (
                <FormControl isRequired isInvalid={!!errors.name?.message}>
                  <Input
                    {...field}
                    onChangeText={onChange}
                    isFullWidth
                    marginBottom="2"
                    type="password"
                    autoCapitalize="none"
                    InputLeftElement={
                      <Container ml="3">
                        <FontAwesome
                          name="lock"
                          color={colors.primary[300]}
                          size={16}
                        />
                      </Container>
                    }
                  />
                </FormControl>
              )}
            />

            <Button
              onPress={handleSubmit(onSubmit)}
              w="100%"
              bgColor="secondary.200"
              _text={{
                fontSize: "md",
                fontWeight: 700,
              }}
              isLoading={isLoading}
            >
              Cadastrar
            </Button>
          </Box>

          <ImageBackground
            source={require("../../../assets/images/stranger-things.png")}
            resizeMode="cover"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              bottom: 0,
              zIndex: -1,
            }}
          />
        </Box>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export { Register };
