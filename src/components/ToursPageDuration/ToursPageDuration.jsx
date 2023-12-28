import { useDispatch, useSelector } from "react-redux";
import { searchDaysQty, selectTripsData } from "../../store/slices/tripsData/tripsDataSlice";

const ToursPageDuration = () => {
    const dispatch = useDispatch();
    
  return (
    <div className="sidebar-widget duration-widget">
      <div className="widget-title">
        <h3>Durations</h3>
      </div>
      <div className="widget-content">
        <ul className="category-list clearfix">
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="1-2-days">
                <input
                  type="radio"
                  className="material-control-input travio_duration"
                  id="1-2-days"
                  defaultValue="1-2-days"
                  name="travio_duration"
                  onChange={() => dispatch(searchDaysQty({ min: 0, max: 3 }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">0 - 3 Days</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="2-3-days">
                <input
                  type="radio"
                  className="material-control-input travio_duration"
                  id="2-3-days"
                  defaultValue="2-3-days"
                  name="travio_duration"
                  onChange={() => dispatch(searchDaysQty({ min: 3, max: 7 }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">3 - 7 Days</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="3-4-days">
                <input
                  type="radio"
                  className="material-control-input travio_duration"
                  id="3-4-days"
                  defaultValue="3-4-days"
                  name="travio_duration"
                  onChange={() => dispatch(searchDaysQty({ min: 7, max: 10 }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">7 - 10 Days</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="4-5-days">
                <input
                  type="radio"
                  className="material-control-input travio_duration"
                  id="4-5-days"
                  defaultValue="4-5-days"
                  name="travio_duration"
                  onChange={() => dispatch(searchDaysQty({ min: 10, max: 1000 }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">10+ Days</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToursPageDuration;
