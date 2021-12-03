import {
  createMuiTheme,
  responsiveFontSizes,
  Theme as MuiTheme,
  ThemeOptions,
} from "@material-ui/core/styles";

export const createLightTheme = (options?: ThemeOptions): MuiTheme => {
  const theme = createMuiTheme({
    ...options,
    palette: {
      ...options.palette,
      background: {
        paper: "#fff",
        default: "#fafafa",
      },
      primary: {
        light: "#62cdff",
        main: "#009ce2",
        dark: "#006eb0",
        contrastText: "#000",
      },
      secondary: {
        light: "#ff59bc",
        main: "#e7018c",
        dark: "#af005f",
        contrastText: "#000",
      },
      // secondary: {
      //   light: "#ffff65",
      //   main: "#ffe529",
      //   dark: "#c8b300",
      //   contrastText: "#000",
      // },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
      },
    },
  });

  return responsiveFontSizes(theme);
};
