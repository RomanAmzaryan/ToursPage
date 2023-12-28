import React from "react";

export default function LeftSideText({tripData, text}) {
  return (
    <>
      <h1>{tripData.country}</h1>
      <p className="leftSideText">
      {text}
      </p>
    </>
  );
}
