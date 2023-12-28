import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";
import NorthAmerica from "./NorthAmericaContinentTours/NorthAmerica";

const NorthAmericaPage = () => {
    const tripsData = useSelector(selectTripsData);
    const NorthAmericaData = tripsData.northAmerica


    return (
        <section>
        <div className="section-inner">
          <div className="allContinents">
            <div className="allContinentsTours">
              <NorthAmerica NorthAmericaData={NorthAmericaData}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default NorthAmericaPage;