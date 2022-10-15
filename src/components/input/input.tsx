import React from "react";
import { TextInput, TextInputProps, Text } from "react-native";
import { Container, InputContainer, Label } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}

      <InputContainer as={TextInput} {...rest} />
    </Container>
  );
};

export { Input };
