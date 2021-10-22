import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ paths }) => {
  const routes = [];
  for (const { path, title } of paths)
    routes.push(
      <ul className="nav__ul" key={`${title}_${path}`}>
        <li className="nav__li">
          <Link to={path}>{title}</Link>
        </li>
      </ul>
    );

  return (
    <header>
      <nav className="nav" style={{ zIndex: "999" }}>
        {routes}
      </nav>
      <div className="fake_nav"></div>
    </header>
  );
};
