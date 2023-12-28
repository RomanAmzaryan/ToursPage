import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";
import Europe from "./EuropeContinentTours/Europe";

const EuropePage = () => {
    const tripsData = useSelector(selectTripsData);
    const EuropeData = tripsData.europeData
    return (
        <section>
        <div className="section-inner">
          <div className="allContinents">
            <div className="allContinentsTours">
              <Europe EuropeData={EuropeData}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default EuropePage;