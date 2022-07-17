import * as styledComponents from "styled-components/native";

interface ColorsInterface {
  main: string;

  mainText: string;
  secondaryText: string;
  inverseText: string;

  background: string;
  foreground: string;
}

export interface ThemeInterface {
  colors: ColorsInterface;
}

const {
  default: styled,
  css,
  ThemeProvider,
  useTheme
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export {css, ThemeProvider, useTheme};
export default styled;
