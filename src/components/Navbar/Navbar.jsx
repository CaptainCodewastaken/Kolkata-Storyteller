import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Nav-logo'>
            <span>Kolkata </span><br/>
            <span>Storytellers</span>
        </div>
        <div className='Nav-list-items'>
            <ul className='Nav-items'>
                <Link to="/" class="no-underline"><li className='Nav-heading'>Home</li></Link>
                <Link to="/about" class="no-underline"><li className='Nav-heading'>About</li></Link>
                <Link to="/features" class="no-underline"><li className='Nav-heading'>Features</li></Link>
                <li><button type='button' className='Login-button'>Login</button ></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar