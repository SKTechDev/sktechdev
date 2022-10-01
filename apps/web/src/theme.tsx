import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#6750a4",
      contrastText: "#ffffff",
      light: "#6750a4",
      dark: "#cfbcff",
    },
    secondary: {
      main: "#5954a8",
      contrastText: "#ffffff",
      light: "#5954a8",
      dark: "#c4c0ff",
    },
    error: {
      main: "#BA1A1A",
    },
  },
});

export default theme;
