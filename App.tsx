import React from "react";

import Navigation from "./src/screens/routes";
import AppThemeProvider from "./src/providers/AppThemeProvider";

const App = () => {
  return (
    <AppThemeProvider>
      <Navigation />
    </AppThemeProvider>
  );
};

export default App;
