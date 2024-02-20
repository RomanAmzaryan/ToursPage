import React, { useEffect, useState } from "react";
import { UseRequest } from "../../../hook/UseRequest";

import "./choosenTour.css";
import { useParams } from "react-router-dom";
import Choosen from "./Choosen/Choosen";

export default function ChoosenTour() {
  const { id } = useParams();
  const { get } = UseRequest();

  const [tripData, setTripData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await get(`http://localhost:5001/tripsData/${id}`);
      setTripData(result);
    })();
  }, [id]);

  return (
    <section>
      <div className="section-inner">
      {tripData.id && (
        <Choosen tripData={tripData}/>
      )}
      </div>
    </section>
  );
}
