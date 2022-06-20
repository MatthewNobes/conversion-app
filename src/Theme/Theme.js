import { createTheme } from "@mui/material";

export const generateTheme = (isDarkMode) => {
  const config = {
    palette: {
      primary: {
        main: "#3D5A80",
        dark: "#30323D",
        contrastText: "#FFF",
      },
      secondary: {
        main: "#F1856A",
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
        secondary: "#4D5061",
      },
    },
  };
  const theme = createTheme(config);
  return theme;
};
