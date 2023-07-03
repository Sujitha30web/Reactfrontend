import React from 'react'
import logo from './Images/speaker.jfif'
import tv from './Images/tv.webp'
import camera from './Images/camera.jpg'
import projector from './Images/projector.jfif'
import printer from './Images/printer.jfif'
import radioo from './Images/radioo.jfif'
import headset from './Images/headset.jfif'
import keyboard from './Images/keyboard.jfif'
import laptop from './Images/laptop.jpg'
import battery from './Images/battery.jfif'
import ups from './Images/ups.jfif'
import drill from './Images/drill.jpg'

import './Gallery.css'
export default function Gallery() {
  return (
    <>
    <div className='parent'>
      <div className='child'>
        <h3>SPEAKER</h3>
      <img src={logo} />
      </div>
      <div className='child'>
      <h3>TELEVISION</h3>
      <img src={tv} />
      </div>
      <div className='child'>
       <h3> CAMERA</h3>
      <img src={camera} />
      </div>
      <div className='child'>
      <h3>PROJECTOR</h3>
      <img src={projector} />
      </div> 
    </div>


    <div className='parent'>
    <div className='child'>
       <h3> PRINTER</h3>
      <img src={printer} />
      </div>
     <div className='child'>
        <h3>RADIO</h3>
      <img src={radioo} />
      </div>
      <div className='child'>
        <h3>HEADSET</h3>
      <img src={headset} />
      </div>
      <div className='child'>
        <h3>KEYBOARD</h3>
      <img src={keyboard} />
      </div>
    </div>



    <div className='parent'>
    <div className='child'>
       <h3> LAPTOP</h3>
      <img src={laptop} />
      </div>
     <div className='child'>
        <h3>BATTERY</h3>
      <img src={battery} />
      </div>
      <div className='child'>
        <h3>UPS</h3>
      <img src={ups} />
      </div>
      <div className='child'>
        <h3>DRILLER</h3>
      <img src={drill} />
      </div>
    </div>
   

    </>
  )
}
