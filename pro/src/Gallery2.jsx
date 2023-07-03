import React from 'react'
import  amp1 from './Images2/amp1.jfif'
import  amp2 from './Images2/amp2.jfif'
import  amp3 from './Images2/amp3.webp'
import  speak1 from './Images2/speak1.jfif'
import  speak2 from './Images2/speak2.webp'
import  speak3 from './Images2/speak3.jfif'
import  bat1 from './Images2/bat1.jfif'
import  bat2 from './Images2/bat2.jfif'
import  bat3 from './Images2/bat3.jfif'
import  cam1 from './Images2/cam1.jfif'
import  cam2 from './Images2/cam2.jfif'
import  cam3 from './Images2/cam3.jfif'
import './Gallery2.css'
export default function Gallery2() {
  return (
    <div>
    <div className='Parent'>
        <div className='name'><h3>AMPLIFIER</h3></div>
        <div className='child'>
        <img src={amp1}/>
        <img src={amp2}/>
        <img src={amp3}/>
        </div>

        <div className='name'><h3>SPEAKER</h3></div>
        <div className='child'>
        <img src={speak1}/>
        <img src={speak2}/>
        <img src={speak3}/>
        </div>  

        <div className='name'><h3>BATTERY</h3></div>
        <div className='child'>
        <img src={bat1}/>
        <img src={bat2}/>
        <img src={bat3}/>
        </div> 

        <div className='name'><h3>CAMERA</h3></div>
        <div className='child'>
        <img src={cam1}/>
        <img src={cam2}/>
        <img src={cam3}/>
        </div> 
    </div>
    

</div>
  )
}
