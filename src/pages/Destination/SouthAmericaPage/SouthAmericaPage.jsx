import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";
import SouthAmerica from "./SouthAmericaContinentTour/SouthAmerica";

const SouthAmericaPage = () => {
    const tripsData = useSelector(selectTripsData);
    const southAmericaData = tripsData.southAmericaData


    return (
        <section>
        <div className="section-inner">
          <div className="allContinents">
            <div className="allContinentsTours">
              <SouthAmerica southAmericaData={southAmericaData}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SouthAmericaPage;