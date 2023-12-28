import React from "react";

export default function LeftSideTable({ tripData }) {
  return (
    <ul className="desc">
      <li>
        <i className="bx bxs-location-plus" style={{ color: "#ff7c5b" }}></i>
        <span>Adrress:</span>
        {tripData.capital}
      </li>
      <li>
        <i className="bx bxs-id-card" style={{ color: "#ff7c5b" }}></i>
        <span>Continent:</span>
        {tripData.continent}
      </li>
      <li>
        <i className="bx bx-globe" style={{ color: "#ff7c5b" }}></i>
        <span>Country:</span>
        {tripData.country}
      </li>
      <li>
        <i className="bx bx-chat" style={{ color: "#ff7c5b" }}></i>
        <span>daysQty:</span>
        {tripData.daysQty}
      </li>
      <li>
        <i className="bx bx-dollar" style={{ color: "#ff7c5b" }}></i>
        <span>Flag:</span>
        <img src={tripData.flag} alt="" />
      </li>
      <li>
        <i className="bx bx-phone" style={{ color: "#ff7c5b" }}></i>
        <span>pricePerDay:</span>
        {tripData.pricePerDay}
      </li>
    </ul>
  );
}
