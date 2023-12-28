import { useDispatch } from "react-redux";
import { searchTourToPrice } from "../../store/slices/tripsData/tripsDataSlice";

const ToursPageRangeBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar-widget price-filter">
      <div className="widget-title">
        <h3>Price Range</h3>
      </div>
      <div className="range-slider clearfix">
        <div className="form-group">
          <p id="min-value-rangeslider">0.00</p>
          <p id="max-value-rangeslider">500</p>
        </div>
        <input type="range" className="range-style pricerange" min="1" max="250" onChange={(e) => dispatch(searchTourToPrice(e.target.value))} />
      </div>
    </div>
  );
};

export default ToursPageRangeBar;
