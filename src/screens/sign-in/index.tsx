import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ImageBackground } from "react-native";
import { z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  FormControl,
  Icon,
  Image,
  Input,
  Link,
  Text,
  useTheme,
} from "native-base";
import { requiredError } from "../../constants";

const SIGN_IN_SCHEMA = z.object({
  username: z.string().min(1, requiredError),
  password: z.string().min(1, requiredError),
});

type ISignInForm = TypeOf<typeof SIGN_IN_SCHEMA>;

const SignIn = () => {
  const { colors } = useTheme();

  const { control, handleSubmit, formState } = useForm<ISignInForm>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(SIGN_IN_SCHEMA),
  });

  // console.log(formState.errors);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
  };

  return (
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
          resizeMode="cover"
          maxHeight="150px"
          maxWidth="500px"
          alt="logo"
          alignSelf="center"
          my="4"
        />

        <Text fontFamily="heading" fontSize="4xl" fontWeight="bold">
          Entre agora!
        </Text>

        <Controller
          control={control}
          name="username"
          render={({ field, formState: { errors } }) => (
            <FormControl isRequired isInvalid={!!errors.username?.message}>
              <Input
                {...field}
                isFullWidth
                placeholder="Usuário"
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

              <FormControl.ErrorMessage
                leftIcon={
                  <FontAwesome name="info-circle" color={colors.danger[500]} />
                }
              >
                {errors.username?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.password?.message} isRequired>
              <Input
                {...field}
                mt="2"
                placeholder="Senha"
                isFullWidth
                type="password"
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

              <FormControl.ErrorMessage
                leftIcon={
                  <FontAwesome name="info-circle" color={colors.danger[500]} />
                }
              >
                {errors.password?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />

        <Link color="text.200" my="4">
          Esqueceu a senha ?
        </Link>

        <Button
          onPress={handleSubmit(onSubmit)}
          w="100%"
          bgColor="secondary.200"
          _text={{
            fontSize: "md",
            fontWeight: 700,
          }}
        >
          Entrar
        </Button>

        <Link color="text.200" mt={4}>
          Você é novo ? | Crie uma conta
        </Link>

        <Box mt={6} px={5}>
          <Button
            width="100%"
            bgColor="gray.100"
            _text={{ fontFamily: "heading", fontWeight: 700, fontSize: "md" }}
            _pressed={{
              opacity: 0.75,
            }}
            leftIcon={
              <Icon
                as={FontAwesome}
                name="google"
                color={colors.white}
                size={4}
              />
            }
          >
            Entre com o Google
          </Button>
        </Box>
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
  );
};

export { SignIn };
