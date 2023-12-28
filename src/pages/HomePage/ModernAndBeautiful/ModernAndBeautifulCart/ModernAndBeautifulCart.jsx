import React from "react";
import CartsButton from "../../../../components/UI/CartsButton/CartsButton";
import { ALLCONTINENTS_PAGE_PATH, CHOOSEN_TOUR_ID } from "../../../../routes/path";

import './modernAndBeautifulCart.css'

export default function ModernAndBeautifulCart({threeRandomTrips}) {
  return (
    <div className="ModernAndBeautifulCart">
      {threeRandomTrips.map((tour) => {
        return (
          <div className="cart" key={tour.id}>
            <img src={tour.sightsImages[0]} className="cartImg" alt="" />
            <div className="padding">
              <h4 className="cartTitle">{tour.capital}</h4>
              <h4 className="cartPrice">
                ${tour.pricePerDay} <span>/ per person</span>
              </h4>
              <div className="daysCount">
                <i className="bx bx-time time" style={{ color: "#aaaaaa" }}></i>
                {tour.daysQty} days |
                <i
                  className="bx bx-map-alt map"
                  style={{ color: "#aaaaaa" }}
                ></i>
                G87P,
                {tour.country}
              </div>
              <p className="cartDescription">{tour.tourDetails}</p>
              <CartsButton
                toLink={
                  `/` +
                  ALLCONTINENTS_PAGE_PATH +
                  `/` +
                  CHOOSEN_TOUR_ID +
                  `/${tour.id}`
                }
                text={"See Detalis"}
                size={{ padding: "11px 28px " }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
