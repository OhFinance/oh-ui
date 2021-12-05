import { ThemeOptions } from "@material-ui/core";
import { createDarkTheme } from "./dark";
import { createLightTheme } from "./light";

const BaseThemeOptions: ThemeOptions = {
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      "'Open Sans'",
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      "sans-serif",
    ].join(","),
    button: {
      fontWeight: 600,
    },
  },
};

export const DarkTheme = createDarkTheme(BaseThemeOptions);
export const LightTheme = createLightTheme(BaseThemeOptions);
