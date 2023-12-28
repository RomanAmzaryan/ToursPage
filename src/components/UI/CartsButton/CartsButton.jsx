import React from "react";

import "./cartsButton.css";
import { NavLink } from "react-router-dom";

export default function CartsButton({text, size, toLink}) {
  return (
    <div className="cartButton">
      <NavLink to={toLink} className="nav-link" style={size}>
        {text}
      </NavLink>
    </div>
  );
}
