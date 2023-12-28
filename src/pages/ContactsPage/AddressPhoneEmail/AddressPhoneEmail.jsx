import React from 'react'

import './addressPhoneEmail.css'
import Block from './Blocks/Block'

export default function AddressPhoneEmail() {
  return (
    <section>
        <div className="section-inner">
            <div className="blocks">
                <Block icon={<i className='bx bx-location-plus' style={{color:'#ce8a22'}}  ></i>} title={"Address"} text={"31 park street, 5th Avenue, Dhanmondy, Dhaka."}/>
                <Block icon={<i className='bx bx-phone' style={{color:'#ce8a22'}} ></i>} title={"Phone"} text={<p>+31 666 888 0001</p>}/>
                <Block icon={<i className='bx bx-envelope' style={{color:'#ce8a22'}} ></i>} title={"Email"} text={<p>info@example.com</p>}/>
            </div>
        </div>
    </section>
  )
}
