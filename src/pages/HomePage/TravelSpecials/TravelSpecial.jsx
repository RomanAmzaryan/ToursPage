import TravelSpecialCard from "./TravelSpecialCard/TravelSpecialCard";

import "./TravelSpecial.css";

const TravelSpecial = () => {
  const CardsData = [
    {
      id: 1,
      image: "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-1.jpg",
      title: "2000+ Our Worldwide Guide",
    },
    {
      id: 2,
      image: "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-2.jpg",
      title: "100% Trusted Tour Agency",
    },
    {
      id: 3,
      image: "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg",
      title: "12+ Years of Travel Experience",
    },
    {
      id: 4,
      image: "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-4.jpg",
      title: "98% of Our Travelers are Happy",
    },
  ];

  return (
    <section className="travelSpecial">
      <div className="section-inner">
        <h3>TRAVIO SPECIALS</h3>
        <h1>Why Travel with Tutive?</h1>

        <div className="carts">
          <TravelSpecialCard CardsData={CardsData} />
        </div>
      </div>
    </section>
  );
};

export default TravelSpecial;
