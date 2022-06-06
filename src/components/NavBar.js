import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <li><NavLink to="/" exact >Home</NavLink></li>
    <li><NavLink to="/movies" exact >Movies</NavLink></li>
    <li><NavLink to="/directors" exact >Directors</NavLink></li>
    <li><NavLink to="/actors">Actors</NavLink></li>
  </div>;
}

export default NavBar;
