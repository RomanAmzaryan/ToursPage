import ChooseToursContent from "../FamilyToursPage/ChooseToursContent/ChooseToursContent";
import FamilyToursCarts from "../FamilyToursPage/FamilyToursCarts/FamilyToursCarts";
import "../FamilyToursPage/FamilyToursPage.css";

const AdultToursPage = () => {

  return (
    <div>
      <div className="contactHeader">
        <h1 className="contactH1">Tours</h1>
      </div>
      <div className="tourContent">
        <FamilyToursCarts />
        <ChooseToursContent />
      </div>
    </div>
  );
};

export default AdultToursPage;
