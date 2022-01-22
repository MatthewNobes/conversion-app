import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Header from './Components/Header';

import Home from './Components/Home'
import DistanceConversion from './Components/Distance/DistanceConversion';
import MassConversion from './Components/Mass/MassConversion';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Router className="React-Router">
          <div>
            <ul className="React-Router-Group">
              <li className="React-Router-Headlinks">
                <Link className="React-Router-Links" to="/">Home</Link>
              </li>
              <li className="React-Router-Headlinks">
                <Link className="React-Router-Links" to="/Mass">Mass</Link>
              </li>
              <li className="React-Router-Headlinks">
                <Link className="React-Router-Links" to="/Distance">Distance</Link>
              </li>
            </ul>

            <Routes>
              <Route path="/Distance" element={<DistanceConversion/>} />
              <Route path="/Mass" element={<MassConversion/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </Router>
      </nav>
    </div>
  );
}

export default App;
