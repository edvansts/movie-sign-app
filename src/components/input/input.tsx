import React, { ReactNode } from "react";
import { TextInput, TextInputProps, Text } from "react-native";
import { Container, Icon, InputContainer, Label } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  label?: string;
  icon?: ReactNode;
}

const Input = ({ label, icon, ...rest }: InputProps) => {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}

      {!!icon && <Icon>{icon}</Icon>}
      <InputContainer as={TextInput} {...rest}></InputContainer>
    </Container>
  );
};

export { Input };
