import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const themeConstant = require("config/theme");

// A custom theme for this app
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: themeConstant.colors.primary.main,
        dark: themeConstant.colors.primary.dark,
        contrastText: themeConstant.colors.fg.main,
      },
      secondary: {
        main: themeConstant.colors.secondary.main,
        dark: themeConstant.colors.secondary.dark,
        contrastText: themeConstant.colors.fg.main,
      },
      error: {
        main: themeConstant.colors.error.main,
        dark: themeConstant.colors.error.dark,
      },
    },
    breakpoints: {
      values: themeConstant.breakpoints,
    },
    typography: {
      fontSize: themeConstant.typography.fontSize,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "6rem",
          },
        },
      },
    },
  })
);

export default theme;
