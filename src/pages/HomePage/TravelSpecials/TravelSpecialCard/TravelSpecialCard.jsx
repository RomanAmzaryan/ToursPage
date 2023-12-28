import "./TravelSpecialCard.css";
const TravelSpecialCard = ({ CardsData }) => {
  return (
    <>
      {CardsData.map((card) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block" key={card.id}>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <a href="https://travio.smartdemowp.com/tour-guide/">
                    <img decoding="async" src={card.image} alt="" />
                  </a>
                </div>
                <div className="lower-content">
                  <div className="icon-box">
                    <i className="fa-thin fa-stars"></i>
                  </div>
                  <h4>
                    <a href="https://travio.smartdemowp.com/tour-guide/">{card.title}</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TravelSpecialCard;
