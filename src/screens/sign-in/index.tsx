import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Image, Pressable, Text, useWindowDimensions } from "react-native";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { Logo, SignInContainer } from "./styles";

interface ISignInForm {
  username: string;
  password: string;
}

const SignIn = () => {
  const { height } = useWindowDimensions();

  const { control, handleSubmit } = useForm<ISignInForm>({
    defaultValues: {
      password: "",
      username: "",
    },
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
  };

  return (
    <SignInContainer>
      <Logo
        source={require("../../../assets/images/logo_invert.jpg")}
        height={height}
        as={Image}
        resizeMode="contain"
      />

      <Controller
        control={control}
        name="username"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            label="Usuário"
            value={value}
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            label="Senha"
            value={value}
            secureTextEntry
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} text="Entrar" />
    </SignInContainer>
  );
};

export { SignIn };
