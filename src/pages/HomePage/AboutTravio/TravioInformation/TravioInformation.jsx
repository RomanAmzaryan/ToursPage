import React from "react";

import "./travioInformation.css";
import { HomePageButtons } from "../../../../components/UI/Buttons/HomePageButtons/HomePageButtons";

export default function TravioInformation() {
  return (
    <div className="TravioInformation">
      <h3>ABOUT TRAVIO</h3>
      <h1>
        World Best Travel Agency Company <br />
        Since 2008.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse
        ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
      <ul className="Ratione">
        <li className="RationeList">
          <i className="bx bx-check checkIcon"></i> Ratione voluptatem.sequi nesciunt.
        </li>
        <li className="RationeList">
          <i className="bx bx-check checkIcon"></i> Ratione voluptatem.
        </li>
        <li className="RationeList">
          <i className="bx bx-check checkIcon"></i> Ratione voluptatem sequi.
        </li>
      </ul>
      <div className="buttonBlock">
        <HomePageButtons text={"Find Tours"} size={{ padding: "19.5px 50.5px" }} />
      </div>
    </div>
  );
}
