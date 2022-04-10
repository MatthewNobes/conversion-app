import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import Menu from "./components/Menu";
import Home from "./components/Home";
import MassConversion from "./features/Mass";
import DistanceConversion from "./features/Distance";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
