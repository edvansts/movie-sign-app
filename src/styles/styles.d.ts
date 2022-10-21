import { theme } from "./theme";

type ThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends ThemeType {}
}
