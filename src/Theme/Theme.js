import { createTheme } from "@mui/material";

export const generateTheme = (isDarkMode) => {
  const darkModeTheme = {
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
        light: "#E0FBFC",
        dark: "#30323D",
        contrastText: "#FFF",
      },
      secondary: {
        main: "#FFF",
      },
      error: {
        main: "#F1856A",
        dark: "#E03D15",
      },
      background: {
        default: "#293241",
        paper: "#3D5A80",
      },
      extraColours: {
        lightCyan: "#E0FBFC",
      },
      typography: {
        fontFamily: "Helvetica",
        fontSize: 15,
      },
      text: {
        primary: "#FFF",
        secondary: "#a4a4a4",
      },
    },
  };

  const lightModeTheme = {
    palette: {
      primary: {
        main: "#3D5A80",
        light: "#E0FBFC",
        dark: "#30323D",
        contrastText: "#FFF",
      },
      secondary: {
        main: "#3F4D64",
      },
      error: {
        main: "#F1856A",
        dark: "#E03D15",
      },
      background: {
        default: "#E0FBFC",
        paper: "#98C1D9",
      },
      extraColours: {
        lightCyan: "#E0FBFC",
      },
      typography: {
        fontFamily: "Roboto",
        fontSize: 15,
      },
      text: {
        primary: "#000",
        secondary: "#293241",
      },
    },
  };

  const colourMode = isDarkMode === false ? lightModeTheme : darkModeTheme;

  const theme = createTheme(colourMode);
  return theme;
};
