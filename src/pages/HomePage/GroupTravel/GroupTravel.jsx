import React from 'react'

import './groupTravel.css'
import { HomePageButtons } from '../../../components/UI/Buttons/HomePageButtons/HomePageButtons'

export default function GroupTravel() {
  return (
    <div className='GroupTravel'>
        <div className="section-inner">
            <div className="GroupTravelCart">
                <h1 className='grouptTravelTitle'>Group Travel to New Zealand</h1>
                <h4 className='cartPrices'>$150 <span>$300</span></h4>
                <p className='cartDescription'>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor ux incidunt labore dolore magna aliqua Quis ipsum suspen. bgbd</p>
                <HomePageButtons text={"See Detalis"} size={{ padding: "12.5px 29px" }}/>
            </div>
        </div>
    </div>
  )
}
