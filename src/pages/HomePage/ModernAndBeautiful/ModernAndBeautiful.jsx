import React from "react";

import "./modernAndBeautiful.css";
import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";
import ModernAndBeautifulCart from "./ModernAndBeautifulCart/ModernAndBeautifulCart";

export default function ModernAndBeautiful() {
  const tripsData = useSelector(selectTripsData);
  const getRandomThreeTrips = (allData) => {
    const dataCopy = [...allData]; // Create a copy of the array

    // Shuffle the copied array using the Fisher-Yates shuffle algorithm
    for (let i = dataCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]];
    }

    // Retrieve three random trips (or fewer if the array length is less than 3)
    return dataCopy.slice(0, Math.min(3, dataCopy.length));
  };

  // Call the function to get three random trip objects
  const threeRandomTrips = getRandomThreeTrips(tripsData.allData);
  console.log(threeRandomTrips); // This will log an array containing three random trip objects from tripsData.allData
  return (
    <section className="modernAndBeautiful">
      <div className="section-inner">
        <h3>MODERN & BEAUTIFUL</h3>
        <h1>Our Most Popular Adventures</h1>

        <div className="carts">
          <ModernAndBeautifulCart threeRandomTrips={threeRandomTrips} />
        </div>
      </div>
    </section>
  );
}
