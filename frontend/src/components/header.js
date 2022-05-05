import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/event" className="nav-link">
             Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <Switch
              checked={darkTheme}
              onChange={(e, v) => {
                setDarkTheme(v);
              }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;