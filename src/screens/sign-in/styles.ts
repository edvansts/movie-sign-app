import styled from "styled-components/native";

export const SignInContainer = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

export const Logo = styled.Image<{ height: number }>`
  width: 100%;
  max-width: 500px;

  height: ${({ height }) => height * 0.3}px;
  max-height: 150px;
`;
