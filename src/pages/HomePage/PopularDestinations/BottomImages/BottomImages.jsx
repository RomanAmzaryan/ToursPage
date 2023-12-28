import React from "react";

import "./bottomImages.css";
import { HomePageButtons } from "../../../../components/UI/Buttons/HomePageButtons/HomePageButtons";

export default function BottomImages() {
  return (
    <div className="Bottomimages">
      <div className="image">
        <img
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/shape-3.png"
          alt=""
          className="birdss"
        />
      </div>
      <div className="image smartdemowpBorder">
        <img
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-3.jpg"
          alt=""
        />
        <h4 className="imageText">New Your City</h4>
      </div>
      <div className="image smartdemowpBorder">
        <img
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-4.jpg"
          alt=""
        />
        <h4 className="imageText">New Your City</h4>
      </div>

      <div className="image FindAll">
        <h4>Find All <br /> Destination</h4>
        <HomePageButtons text={"Find Now"} size={{padding: "17.5px 60px"}}/>
      </div>
    </div>
  );
}
