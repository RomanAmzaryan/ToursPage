import ExploreYourTravel from "./ExploreYourTravel/ExploreYourTravel";
import HomePageMap from "./HomePageMap/HomePageMap";
import HomePageStatistics from "./HomePageStatistics/HomePageStatistics";
import AboutTravio from "./AboutTravio/AboutTravio"
import GroupTravel from "./GroupTravel/GroupTravel";
import PopularDestinations from "./PopularDestinations/PopularDestinations";
import ModernAndBeautiful from "./ModernAndBeautiful/ModernAndBeautiful";
import TravelSpecial from "./TravelSpecials/TravelSpecial"
import "./homePage.css";




const HomePage = () => {
  return (
    <div className="main">
      <ExploreYourTravel />
      <TravelSpecial/>
      <AboutTravio/>
      <ModernAndBeautiful/>
      <GroupTravel/>
      <PopularDestinations/>
      <HomePageMap/>
      <HomePageStatistics/>

    </div>
  );
};

export default HomePage;
