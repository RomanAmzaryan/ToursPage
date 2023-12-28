import { useSelector } from "react-redux";
import Africa from "./AfricaContinentsTours/Africa";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";

const AfricaPage = () => {
    const tripsData = useSelector(selectTripsData);
    const AfricaData = tripsData.africaData
    return (
    <section>
        <div className="section-inner">
          <div className="allContinents">
            <div className="allContinentsTours">
              <Africa AfricaData={AfricaData}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AfricaPage;