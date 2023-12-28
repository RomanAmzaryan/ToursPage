import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";
import Asia from "./AsiaContinentsTours/Asia";

const AsiaPage = () => {
    const tripsData = useSelector(selectTripsData);
    const AsiaData = tripsData.asiaData
    return (
        <section>
        <div className="section-inner">
          <div className="allContinents">
            <div className="allContinentsTours">
              <Asia AsiaData={AsiaData}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AsiaPage;