import React from 'react'

import './block.css'

export default function Block({title, text, icon}) {
  return (
    <div className='block'>
        <div className="icon-block">
            {icon}
        </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
