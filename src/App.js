import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import Home from "./Components/Home";
import ConversionForm from "./features/ConversionForm/";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <Routes>
          <Route
            path="/Distance"
            element={<ConversionForm conversionFormat="Distance" />}
          />
          <Route
            path="/Mass"
            element={<ConversionForm conversionFormat="Mass" />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
