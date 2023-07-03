import React from 'react'
import './Contact.css'
import add from './Images2/add.png'
import phn from './Images2/phn.png'
import email from './Images2/email.webp'
import conus from './Images2/conus.png'
import map from './Images2/map.svg'


export default function Contact() {
  return (
<div>
  <h1>CONTACT US!</h1>

<div className='parent1'>
<div className='child1'>
<img className='img1' src={map}/>
</div>
<div className='child1'>
  <input type="text" placeholder="Username" name="" id="" />
  <input type="text" placeholder="Email" name="" id="" />
  <input className='mes' type="text" placeholder="Message" name="" id="" />
  <button>SUBMIT</button>
</div>
</div>


    <div className='parent2'>
        {/* <h1 className='head'>INTERESTED IN CONNECTING WITH PRESIDIO? WE WANT TO HEAR FROM YOU.</h1> */}
        <div className='child2'>
            <img src={add}/>
            {/* <h3>ADDRESS</h3> */}
            <p>
            <b>34, Prabhu complex,
    Nachiyappa 2nd street, 
    Erode.</b>
            </p>
        </div>
        <div className='child2'>
        <img src={phn}/>
        {/* <h3>CONTACT</h3> */}

        <p>
            <b>+91 9842776615</b>
            </p>
        </div>
        <div className='child2'>
        <img src={email}/>
        {/* <h3>EMAIL</h3> */}
        <p><b>shanmugaelectronics@gmail.com</b></p>
        </div>
      
    </div>
    </div>
  )
}
