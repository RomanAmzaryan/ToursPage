import React from 'react'

import './topImages.css'

export default function TopImages() {
  return (
    <div className='Topimages'>
        <div className="image">
            <h4 className='Choose'>CHOOSE YOUR PLACE</h4>
            <h1 className='popular'>Popular Destinations</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt.</p>
        </div>
        <div className="image smartdemowpBorder">
            <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-1.jpg" alt="" />
            <h4 className='imageText'>New Your City</h4>
        </div>
        <div className="image smartdemowpBorder">
            <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-2.jpg" alt="" />
            <h4 className='imageText'>New Your City</h4>
        </div>
        <div className="image">
        <img
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/shape-3.png"
          alt=""
          className="birds"
        />
        </div>
    </div>
  )
}
