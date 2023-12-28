import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";
import Oceania from "./OceaniaContinentTours/Oceania";

const OceaniaPage = () => {
    const tripsData = useSelector(selectTripsData);
    const OceaniaData = tripsData.oceaniaData


    return (
        <section>
        <div className="section-inner">
          <div className="allContinents">
            <div className="allContinentsTours">
              <Oceania OceaniaData={OceaniaData}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default OceaniaPage;