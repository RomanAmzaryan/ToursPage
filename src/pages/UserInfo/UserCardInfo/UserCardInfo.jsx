import React from "react";

function UserCardInfo({ currentUser }) {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='front'>
          <img
            src={"https://i.ibb.co/PYss3yv/map.png"}
            className='map-img'
            alt=''
          />
          <div className='cardRow'>
            <img
              src={"https://i.ibb.co/G9pDnYJ/chip.png"}
              width={"30px"}
              alt=''
            />
            <img
              src={"https://i.ibb.co/WHZ3nRJ/visa.png"}
              width={"30px"}
              alt=''
            />
          </div>
          <div className='cardRow card-no'>{currentUser.cardNumber}</div>
          <div className='cardRow card-holder'>
            <p>CARD HPLDER</p>
            <p>VALID TILL</p>
          </div>
          <div className='cardRow name'>
            <p>
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p>10 / 25</p>
          </div>
        </div>
        <div className='back'>
          <img
            src={"https://i.ibb.co/PYss3yv/map.png"}
            className='map-img'
            alt=''
          />
          <div className='bar'></div>
          <div className='cardRow card-cvv'>
            <div>
              <img
                src={"https://i.ibb.co/S6JG8px/pattern.png"}
                alt=''
              />
            </div>

            <p>{currentUser.cvv}</p>
          </div>
          <div className='cardRow signature'>
            <p>CUSTOMER SIGNATURE</p>
            <img
              src={"https://i.ibb.co/WHZ3nRJ/visa.png"}
              width={"30px"}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardInfo;
