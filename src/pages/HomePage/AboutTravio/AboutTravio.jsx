import React from 'react'

import './aboutTravio.css'
import TravelingImages from './TravelingImages/TravelingImages'
import TravioInformation from './TravioInformation/TravioInformation'

export default function AboutTravio() {
  return (
    <section>
      <div className="section-inner">
        <div className="AboutTravio">
        <TravelingImages />
        <TravioInformation/>
        </div>
      </div>
    </section>
  )
}
