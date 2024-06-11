import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='Navbar'>
        <div className='Nav-logo'>
            <span>KOLKATA </span><br/>
            <span>STORYTELLERS</span>
        </div>
        <div className='Nav-list-items'>
            <ul className='Nav-items'>
                <Link to="/" class="no-underline"><li className='Nav-heading'>Home</li></Link>
                <Link to="/about" class="no-underline"><li className='Nav-heading'>About</li></Link>
                <Link to="/features" class="no-underline"><li className='Nav-heading'>Features</li></Link>
                {isAuthenticated?<li><button type='button' className='Login-button'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button ></li>:<li><button type='button' className='Login-button' onClick={() => loginWithRedirect()}>Login</button ></li>}
                
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar