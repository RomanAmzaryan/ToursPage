import React from 'react'
import { HomePageButtons } from '../../../../components/UI/Buttons/HomePageButtons/HomePageButtons'

import './contactForm.css'

function ContactForm() {
  return (
    <div className="ContactForm">
      <form action="" className="contactForm">
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="Email Address"/>
        <input type="text" placeholder="Phone Number"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="40" rows="8" placeholder="Write Message"></textarea>
        <HomePageButtons text={"Submit Now"} size={{padding:"17.5px 41.5px"}}/>
      </form>
    </div>
  )
}

export default ContactForm
