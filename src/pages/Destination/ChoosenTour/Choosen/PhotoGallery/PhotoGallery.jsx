import React from "react";

export default function PhotoGallery({tripData}) {
  return (
    <div className="photoGallery">
      <h1>Photo Gallery</h1>
      <div className="bigGallery">
        <img src={tripData.sightsImages[0]} alt="" />
      </div>
      <div className="leftSideImages">
        {tripData.sightsImages.map((img) => {
          return (
            <div className="leftSideImage">
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
