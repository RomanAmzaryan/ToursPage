import React from "react";

import "./allContinentsTours.css";
import { HomePageButtons } from "../../../../components/UI/Buttons/HomePageButtons/HomePageButtons";
import { CHOOSEN_TOUR_ID } from "../../../../routes/path";

export default function AllContinentsTours({ tripsData, chooseContinent }) {
  return (
    <div className="Continents">
      {tripsData.allData.map((data) => {
            return (
              <div className="continent" key={data.id}>
                <div className="continentImg">
                  <img src={data.sightsImages[0]} alt="" />
                </div>
                <div className="continentContent">
                  <div className="CountryAndTime">
                    <h1 className="continentH1">{data.country}</h1>
                  </div>
                  <div className="continentsDescription">
                    <span>{data.tourDetails}</span>
                  </div>
                </div>
                <div className="button">
                  <HomePageButtons
                    toLink={CHOOSEN_TOUR_ID + `/${data.id}`}
                    text={"View More"}
                    size={{ padding: "10px 20px" }}
                  />
                </div>
              </div>
            );
          })}
    </div>
  );
}
