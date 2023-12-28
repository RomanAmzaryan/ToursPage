import "./HomePageStatistics.css";

const HomePageStatistics = () => {
  return (
    <div className="homePageStatistics">
      <div className="statisticsHolder">
        <div className="statistic1">
          <div className="statInfo">
            <h3>5000+</h3>
            <p>Awesome Hikers</p>
          </div>
        </div>
        <div className="statistic2">
          <div className="statInfo">
            <h3>100+</h3>
            <p>Stunning Places</p>
          </div>
        </div>
        <div className="statistic3">
          <div className="statInfo">
            <h3>1200+</h3>
            <p>Miles to Hike</p>
          </div>
        </div>
        <div className="statistic4">
          <div className="statInfo">
            <h3>15+</h3>
            <p>Years in Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageStatistics;
