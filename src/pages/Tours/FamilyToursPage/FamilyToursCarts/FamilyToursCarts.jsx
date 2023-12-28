import React from "react";

import "./familyToursCarts.css";
import TourCart from "../../../HomePage/ModernAndBeautiful/TourCart/TourCart";
import { selectTripsData } from "../../../../store/slices/tripsData/tripsDataSlice";
import { useSelector } from "react-redux";

export default function FamilyToursCarts() {
  const { allData, searchData } = useSelector(selectTripsData);
  return (
    <section>
      <div className="section-inner">
        <div className="Carts">
          <TourCart allData={allData} searchData={searchData} />
        </div>
      </div>
    </section>
  );
}
