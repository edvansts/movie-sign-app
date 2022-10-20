import styled from "styled-components/native";

export const Form = styled.View`
  padding: 20px 20px 60px;
  align-items: center;
`;

export const Logo = styled.Image<{ height: number }>`
  width: 100%;
  max-width: 500px;

  height: ${({ height }) => height * 0.3}px;
  max-height: 150px;
`;

export const Background = styled.ImageBackground`
  height: 100%;
  width: 100%;

  position: absolute;
  bottom: 0;
  z-index: -1;
`;
