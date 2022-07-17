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
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export {css, ThemeProvider};
export default styled;
