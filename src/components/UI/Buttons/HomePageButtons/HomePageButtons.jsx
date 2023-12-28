import { NavLink } from "react-router-dom";

import "./homePageButtons.css";

export const HomePageButtons = ({ text, size, icon, toLink }) => {
  return (
    <button className="btn-div" type="submit">
      <NavLink to={toLink} className="nav-link" style={size}>
        {text}
        {icon && icon}
      </NavLink>
    </button>
  );
};
