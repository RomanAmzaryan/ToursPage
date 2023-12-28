import React from "react";

import "./choosen.css";
import { HomePageButtons } from "../../../../components/UI/Buttons/HomePageButtons/HomePageButtons";
import LeftSideText from "./LeftSideHead/leftSideText";
import LeftSideImages from "./LeftSideImages/LeftSideImages";
import LeftSideTable from "./LeftSideTable/LeftSideTable";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import ModernAndBeautifulCart from "../../../HomePage/ModernAndBeautiful/ModernAndBeautifulCart/ModernAndBeautifulCart";
import { useSelector } from "react-redux";
import { selectTripsData } from "../../../../store/slices/tripsData/tripsDataSlice";

export default function Choosen({ tripData }) {
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
  return (
    <div className="choosen">
      <div className="leftSide">
        <LeftSideText
          tripData={tripData}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum. Sed ut perspiciatis unde omnis iste natuserror sit voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt explicabo.`}
        />

        <LeftSideImages tripData={tripData} />

        <div className="leftSideText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
          rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>

        <h1>Country Details</h1>
        <p className="leftSideText">{tripData.tourDetails}</p>

        <LeftSideTable tripData={tripData} />

        <PhotoGallery tripData={tripData} />

        <div className="bookTour">
          <h3>Do You Like Tour? then Book it</h3>
          <i className="bx bxs-arrow-to-bottom" style={{ color: "#ff7c5b" }}></i>
          <HomePageButtons text={"Book Tour"} size={{ padding: "20px 50px" }} />
        </div>
      </div>
      <div className="rightSide">
        <ModernAndBeautifulCart threeRandomTrips={threeRandomTrips} />
      </div>
    </div>
  );
}

