import React from 'react'

import TopImages from './TopImages/TopImages'
import BottomImages from './BottomImages/BottomImages'

export default function PopularDestinations() {
  return (
    <section>
        <div className="section-inner">
            <div className="PopularDestinations">
                <TopImages/>
                <BottomImages />
            </div>
        </div>
    </section>
  )
}
