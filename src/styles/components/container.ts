import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.BACKGROUND};
  flex: 1;
`;
