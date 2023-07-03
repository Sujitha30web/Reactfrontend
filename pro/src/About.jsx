import React from 'react'
import img1 from './Images2/about1.png'
import map from './Images2/map.svg'
import './About.css'
export default function About() {
  return (
    <div>
      <div className='Parent'>
       <div className='child1'>
        <h3><b>Business outcomes</b></h3>
        <p>We are a Global Digital Services and Solutions Provider delivering customers the secure cloud environments that form the backbone of digital transformation. We guide you from initial assessments, strategy and consulting – to implementation and deployment – to managed services that run IT for you, topped off with a suite of flexible financing and consumption options to simplify procurement. Our services experts are thinkers AND doers focused on accelerating business outcomes for customers in all industries.</p>
       </div>
       <div className='child1'>
        <img src={img1}/>
       </div>

    
       <h2 className='ss'> With Shanmuga Stores you get:</h2>

    <div className='Parent'>
       <div className='child2'>
        <p class='pp'>The convergence of decades of IT knowledge with visionary ultra-modern cloud talent</p>
       </div>
       
       <div className='child2'>
        <p class='pp'>Local project delivery backed by a global cohesive team of experts at the ready</p>
       </div>
       <div className='child2'>
        <p class='pp'>Customer-obsessed services professionals who measure success in your terms</p>
       </div>
       <div className='child2'>
        <p class='pp'>The convergence of decades of IT knowledge with visionary ultra-modern cloud talent</p>
       </div>
       </div>


       <div className='Parent'>
       <div className='child3'>
       <img src={map}/>
        </div>
       
       <div className='child3'>
        <h1>GLOBAL REACH.LOCAL DELIVERY.</h1>
        
        <p>With offices and consultants around the globe, your next world-class solution is never far away.</p>
        <button>VIEW OUR LOCATION</button>
       </div>
       </div>


      
      
      </div>
    </div>
  )
}
