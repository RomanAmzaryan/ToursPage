import React from "react";

import "./allContinentsNavbar.css";
import { NavLink } from "react-router-dom";
import {
  AFRICA_PAGE_PATH,
  ALLCONTINENTS_PAGE_PATH,
  ASIA_PAGE_PATH,
  EUROPE_PAGE_PATH,
  NORTHAMERICA_PAGE_PATH,
  OCEANIA_PAGE_PATH,
  SOUTHAMERICA_PAGE_PATH,
} from "../../../../routes/path";

export default function AllContinentsNavbar() {
  return (
    <nav className="AllContinentsNavbar">
      <ul>
        <li>
          <NavLink to={"/" + ALLCONTINENTS_PAGE_PATH}>All</NavLink>
        </li>
        <li>
          <NavLink to={AFRICA_PAGE_PATH}>Africa</NavLink>
        </li>
        <li>
          <NavLink to={ASIA_PAGE_PATH}>Asia</NavLink>
        </li>
        <li>
          <NavLink to={EUROPE_PAGE_PATH}>Europe</NavLink>
        </li>
        <li>
          <NavLink to={NORTHAMERICA_PAGE_PATH}>North America</NavLink>
        </li>
        <li>
          <NavLink to={OCEANIA_PAGE_PATH}>Oceania</NavLink>
        </li>
        <li>
          <NavLink to={SOUTHAMERICA_PAGE_PATH}>South America</NavLink>
        </li>
      </ul>
    </nav>
  );
}
