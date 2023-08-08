import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="topnav">
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/weather-app">Weather app</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </>
  );
};
export default Nav;
