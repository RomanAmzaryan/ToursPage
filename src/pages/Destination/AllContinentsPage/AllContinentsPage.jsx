import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";

import "./allContinents.css";
import AllContinentsTours from "./AllContinentsTours/AllContinentsTours";

const AllContinentsPage = () => {
  const tripsData = useSelector(selectTripsData);

  return (
    <section>
      <div className="section-inner">
        <div className="allContinents">
          <div className="allContinentsTours">
            <AllContinentsTours
              tripsData={tripsData}
            />
          </div>
        </div>
      </div>
    </section>
  )
};


export default AllContinentsPage;
