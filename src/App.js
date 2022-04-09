import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import NavList from "./Components/NavList";

import Home from "./Components/Home";
import DistanceConversion from "./Components/Distance/DistanceConversion";
import MassConversion from "./Components/Mass/MassConversion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavList />
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
