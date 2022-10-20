import styled from "styled-components/native";
import { Button, ButtonText } from "../../styles";

export const StyledButton = styled(Button)<{ bgColor?: string }>`
  width: 100%;
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.SECONDARY_COLOR};
  margin: 6px 0;
`;

export const StyledText = styled(ButtonText)``;
