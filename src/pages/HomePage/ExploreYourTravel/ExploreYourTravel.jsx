import { HomePageButtons } from "../../../components/UI/Buttons/HomePageButtons/HomePageButtons";
import "./ExploreYourTravel.css";

const ExploreYourTravel = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="main-section-content">
          <div className="title-div text-white">
            <h1>
              Explore
              <br />
              Your Travel
            </h1>
          </div>
          <div className="main-text">
            <p>Discover your next great adventure, become an explorer to get started!</p>
          </div>
          <div className="form-inner">
            <form action="" className="booking-form">
              <div className="form-group">
                <input type="text" name="s" placeholder="Where to?" id="place" defaultValue="" />
              </div>
              <div className="form-group">
                <input type="text" name="s" placeholder="Where to?" id="place" defaultValue="" />
              </div>
              <div className="form-group">
                <input type="text" name="s" placeholder="Where to?" id="place" defaultValue="" />
              </div>
              <div className="message-btn">
                <HomePageButtons text={"Find now"} size={{ padding: "19.5px 50.5px" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreYourTravel;
