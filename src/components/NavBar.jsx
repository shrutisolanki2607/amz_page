import React from 'react'
import myImage from '../images/brand_logo.png';
import './NavBar.css' ;
const NavBar = () => {
  return (
    <div className='container'>
        <nav>
            <div className='logo'>
            <img src={myImage} alt='logo'/>
            </div>
            
            <ul>
                <li href='#'> Menu</li>
                <li href='#'> Location</li>
                <li href='#'> About</li>
                <li href='#'> Contact</li>
            </ul>
            
            <button >Login</button>
        </nav>
    </div>
  )
}

export default NavBar ;
