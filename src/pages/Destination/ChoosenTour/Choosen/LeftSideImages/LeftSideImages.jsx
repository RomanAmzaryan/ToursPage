import React from 'react'

export default function LeftSideImages({tripData}) {
  return (
    <div className="leftSideImages">
    {tripData.sightsImages.map((img) => {
      return (
        <div className="leftSideImage">
          <img src={img} alt="" />
        </div>
      );
    })}
  </div>

  )
}
