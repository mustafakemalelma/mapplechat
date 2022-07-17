import "styled-components";
import {ThemeInterface} from "./styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
