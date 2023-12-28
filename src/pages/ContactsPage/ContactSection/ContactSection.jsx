import React from 'react'

import './contactSection.css'
import GetInTouch from './GetInTouch/GetInTouch'
import ContactForm from './ContactForm/ContactForm'

export default function ContactSection() {
  return (
    <section>
      <div className="section-inner">
        <div className="ContactSection">
            <GetInTouch/>
            <ContactForm/>
        </div>
      </div>
    </section>
  )
}
