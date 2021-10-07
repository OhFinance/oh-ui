import { FC, useCallback, useState } from "react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { ThemeContext } from "./ThemeContext";
import { DarkTheme, LightTheme } from "../../theme";

export interface ThemeProviderProps {
  isDark?: boolean;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ isDark, children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    isDark ?? prefersDarkMode
  );

  const toggleTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={!!isDark ? DarkTheme : LightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
