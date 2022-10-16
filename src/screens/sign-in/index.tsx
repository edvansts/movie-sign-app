import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Image, ImageBackground, useWindowDimensions } from "react-native";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { Background, Form, Logo, SignInContainer } from "./styles";

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
      
      <LinearGradient
        colors={["#171616", "#4B444400"]}
        locations={[0.85, 1]}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Form>
          <Logo
            source={require("../../../assets/images/showturn.jpeg")}
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
                icon={<FontAwesome name="lock" color="yellow" />}
              />
            )}
          />

          <Button onPress={handleSubmit(onSubmit)} text="Entrar" />
        </Form>
      </LinearGradient>

      <Background
        source={require("../../../assets/images/stranger-things.png")}
        resizeMode="cover"
        as={ImageBackground}
      />
    </SignInContainer>
  );
};

export { SignIn };
