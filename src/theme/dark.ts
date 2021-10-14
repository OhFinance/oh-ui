import {
  createTheme,
  responsiveFontSizes,
  Theme as MuiTheme,
  ThemeOptions,
} from "@material-ui/core/styles";

const scrollBar = {
  track: "#2b2b2b",
  thumb: "#6b6b6b",
  active: "#959595",
};

const darkScrollbar = (options = scrollBar) => {
  return {
    scrollbarColor: `${options.thumb} ${options.track}`,
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
      backgroundColor: options.track,
    },
    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
      borderRadius: 8,
      backgroundColor: options.thumb,
      minHeight: 24,
      border: `3px solid ${options.track}`,
    },
    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
      backgroundColor: options.active,
    },
    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
      backgroundColor: options.active,
    },
    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
      backgroundColor: options.active,
    },
    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
      backgroundColor: options.track,
    },
  };
};

export const createDarkTheme = (options: ThemeOptions): MuiTheme => {
  const theme = createTheme({
    ...options,
    palette: {
      ...options.palette,
      type: "dark",
      background: {
        paper: "#424242",
        default: "#303030",
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
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: darkScrollbar(),
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};
