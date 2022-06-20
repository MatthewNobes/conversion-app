import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import Menu from "./components/Menu";
import Home from "./components/Home";
import MassConversion from "./features/Mass";
import DistanceConversion from "./features/Distance";
import createCache from "@emotion/cache";
import generateTheme from "./Theme";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

const muiCache = createCache({
  key: "mui",
  prepend: true,
});

const App = () => {
  const theme = generateTheme(false);
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Menu />
          <Box sx={{ paddingTop: "64px", paddingLeft: "64px" }}>
            <Routes>
              <Route path="/Distance" element={<DistanceConversion />} />
              <Route path="/Mass" element={<MassConversion />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
