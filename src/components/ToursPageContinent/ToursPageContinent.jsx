import { useDispatch, useSelector } from "react-redux";
import { searchTocontinent, selectTripsData } from "../../store/slices/tripsData/tripsDataSlice";

const ToursPageContinent = () => {
  const dispatch = useDispatch();
  const { allData, africaData, europeData, asiaData, oceaniaData, southAmericaData, northAmerica } = useSelector(selectTripsData);
  return (
    <div className="sidebar-widget category-widget">
      <div className="widget-title">
        <h3>Continents</h3>
      </div>
      <div className="widget-content">
        <ul className="category-list clearfix">
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="all-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="all-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: allData, continent: "All" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">All</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="africa-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="africa-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: africaData, continent: "Africa" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">Africa</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="adventure-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="adventure-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: northAmerica, continent: "North America" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">North America</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="city-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="city-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: europeData, continent: "Europe" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">Europe</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="couple-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="couple-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: asiaData, continent: "Asia" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">Asia</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="group-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="group-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: oceaniaData, continent: "Oceania" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">Oceania</span>
              </label>
            </div>
          </li>
          <li className="custom-check-box">
            <div className="custom-controls-stacked">
              <label className="custom-control material-checkbox" htmlFor="hosted-tours">
                <input
                  type="radio"
                  className="material-control-input travio_category"
                  id="hosted-tours"
                  name="travio_category"
                  onChange={() => dispatch(searchTocontinent({ data: southAmericaData, continent: "South America" }))}
                />
                <span className="material-control-indicator"></span>
                <span className="description">South America</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToursPageContinent;
