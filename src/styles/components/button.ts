import styled from "styled-components/native";
import { MainText } from "./text";

export const Button = styled.Pressable`
  padding: 10px;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.SECONDARY_COLOR};
  border-radius: 8px;
`;

export const ButtonText = MainText;
