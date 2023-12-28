import React from "react";
import UserCardInfo from "../UserCardInfo/UserCardInfo";
import ModernAndBeautifulCart from "../../HomePage/ModernAndBeautiful/ModernAndBeautifulCart/ModernAndBeautifulCart";
import { useSelector } from "react-redux";
import { selectTripsData } from "../../../store/slices/tripsData/tripsDataSlice";

function MainBd({ currentUser }) {
  const tripsData = useSelector(selectTripsData);
  const getRandomThreeTrips = (allData) => {
    const dataCopy = [...allData]; // Create a copy of the array

    // Shuffle the copied array using the Fisher-Yates shuffle algorithm
    for (let i = dataCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]];
    }

    // Retrieve three random trips (or fewer if the array length is less than 3)
    return dataCopy.slice(0, Math.min(3, dataCopy.length));
  };

  // Call the function to get three random trip objects
  const threeRandomTrips = getRandomThreeTrips(tripsData.allData);
  return (
    <div className='main-bd'>
      <div className='left-side'>
        <div className='profile-side'>
          <p className='user-mail'>
            <i className='fa fa-envelope'></i> {currentUser.email}
          </p>
          <div className='user-bio'>
            <h3>Bio</h3>
            <p className='bio'>Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!</p>
          </div>
          <div className='profile-btn'>
            <button
              className='createbtn'
              id='Create-post'>
              <i className='fa fa-plus'></i> Create
            </button>
          </div>

          <UserCardInfo currentUser={currentUser} />
        </div>
      </div>
      <div className='right-side'>
        <div className='nav'>
          <ul>
            <li className='user-post active'>Booked</li>
          </ul>
        </div>
        <div className='profile-body'>
          <div className='profile-posts tab'>
            <ModernAndBeautifulCart threeRandomTrips={threeRandomTrips} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBd;
