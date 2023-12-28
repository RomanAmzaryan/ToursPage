import React from "react";
import CartsButton from "../../../components/UI/CartsButton/CartsButton";

export default function Block({src}) {
  return (
    <div className="cont">
      <img
        src={src}
        alt=""
      />

      <h1>Including animation in your design system</h1>
      <div className="leftSideText">
        Lorem ipsum dolor sit amet consectur adip icing sed eiusmod tempor
        incididunt labore dolore magna aliqua enim minim veniam quis nostrud
        exercitation laboris nisi ut aliquip ex commodo consequat duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui […]
      </div>
      <CartsButton text={"See Detalis"} size={{ padding: "10px 30px" }} />
    </div>
  );
}
