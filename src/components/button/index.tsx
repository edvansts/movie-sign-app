import { View, Pressable, PressableProps } from "react-native";
import React from "react";
import { StyledButton, StyledText } from "./styles";

interface IButtonProps extends PressableProps {
  text?: string;
  
}

const Button = ({ text, children, ...rest }: IButtonProps) => {
  return (
    <StyledButton as={Pressable} {...rest}>
      {!!text ? <StyledText>{text}</StyledText> : children}
    </StyledButton>
  );
};

export { Button };
