import React from 'react'
import './MobileFrame.css'
import frame from '../assets/frame.png'

function MobileFrame() {
  return (
    <div className='frame'>
        <img className='frame' src={frame} height={667}/>
    </div>
  )
}

export default MobileFrame