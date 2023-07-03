import React from 'react'
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import Form from './Form';
import Service from './Service';
import './Nav.css'

// import './Nav.css'
export default function Nav() {
    return (

        <BrowserRouter>
            <div className='sidebar'>
            
                <h2>E-SHOP</h2>
                <div className='b'>
                <div className='b1'><Link style={{textDecoration: 'none',color:"white"}} to='/Dashboard'>Dashboard</Link> {'   '}</div>
                <div className='b2'><Link style={{textDecoration: 'none',color:"white"}} to='/Form'>Form</Link></div>
                <div className='b3'><Link style={{textDecoration: 'none',color:"white"}} to='/Service'>Service</Link></div>
                </div>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Form' element={<Form />} />
                <Route path='/Service' element={<Service />} />

            </Routes>
            </div>
        </BrowserRouter>
    )
}
                                   