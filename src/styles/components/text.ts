import styled from "styled-components/native";

export const TitleText = styled.Text<{ fontSize?: string }>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize || "22px"};
  color: ${({ theme: { colors } }) => colors.TEXT_COLOR};
  font-family: ${({ theme: { fonts } }) => fonts.titleBold};
`;

export const MainText = styled.Text<{ fontWeight?: string; fontSize?: string }>`
  color: ${({ theme: { colors } }) => colors.TEXT_COLOR};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-family: ${({ theme: { fonts } }) => fonts.regular};
`;

export const Link = styled.Text<{ fontWeight?: string; fontSize?: string }>`
  color: ${({ theme: { colors } }) => colors.TEXT_COLOR};
  font-size: ${(props) => props.fontSize || "16px"};
  padding: 10px 0 0;
  font-weight: ${(props) => props.fontWeight || "400"};
  font-family: ${({ theme: { fonts } }) => fonts.regular};
`;
