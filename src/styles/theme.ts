import { extendTheme } from "native-base";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const theme = extendTheme({
  colors,
  fontConfig: fonts,
  fonts: {
    heading: "Puritan",
    body: "Inter",
    mono: "Inter",
  },
  components: {
    Text: {
      baseStyle: {
        color: "text.100",
      },
    },
    Button: {
      baseStyle: {
        color: "text.100",
        borderRadius: 6,
        bgColor: "secondary.100",
        fontFamily: 'heading'
      },
    },
    Input: {
      defaultProps: {
        borderWidth: 0,
        color: "text.100",
        bgColor: "primary.100",
        height: 10,
        borderRadius: 6,
      },
    },
  },
});

export type ThemeType = typeof theme;
