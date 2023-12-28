import { useDispatch } from "react-redux";
import "../../pages/Tours/FamilyToursPage/FamilyToursPage.css";
import { searchTour } from "../../store/slices/tripsData/tripsDataSlice";
const ToursPageSearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div id="travio_tour_search-3" className="widget_travio_tour_search">
      {" "}
      <div className="sidebar-widget sidebar-search">
        <div className="widget-title">
          <h3>Search Tours</h3>
        </div>{" "}
        <div className="search-form">
          <div className="form-group">
            <input
              type="search"
              name="tour_location"
              id="tour_location"
              placeholder="Search Location"
              onChange={(e) => dispatch(searchTour(e.target.value))}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPageSearchBar;
