import { Link } from "react-router-dom";

export const NavList = () => {
  return (
    <nav>
      <div>
        <ul className="React-Router-Group">
          <li className="React-Router-Headlinks">
            <Link className="React-Router-Links" to="/">
              Home
            </Link>
          </li>
          <li className="React-Router-Headlinks">
            <Link className="React-Router-Links" to="/Mass">
              Mass
            </Link>
          </li>
          <li className="React-Router-Headlinks">
            <Link className="React-Router-Links" to="/Distance">
              Distance
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
