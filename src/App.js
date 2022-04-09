import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";

import Home from "./Components/Home";
import DistanceConversion from "./Components/Distance/DistanceConversion";
import MassConversion from "./Components/Mass/MassConversion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/Distance" element={<DistanceConversion />} />
          <Route path="/Mass" element={<MassConversion />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
