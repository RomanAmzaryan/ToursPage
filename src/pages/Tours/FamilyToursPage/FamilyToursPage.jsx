import ChooseToursContent from "./ChooseToursContent/ChooseToursContent";
import FamilyToursCarts from "./FamilyToursCarts/FamilyToursCarts";
import "./FamilyToursPage.css";

const FamilyToursPage = () => {
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

export default FamilyToursPage;
