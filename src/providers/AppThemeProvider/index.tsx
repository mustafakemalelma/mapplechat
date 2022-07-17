import React, {PropsWithChildren} from "react";

import {ThemeProvider} from "../../config/theme/styled-components";
import AppTheme from "../../config/theme";

const AppThemeProvider = ({children}: PropsWithChildren) => {
  // TODO: dark mode support

  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
