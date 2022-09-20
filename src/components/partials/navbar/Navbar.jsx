import React from 'react'

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            <div className="top-logo">
                <img src="https://krayonstore.s3.amazonaws.com/assets/Screenshot_2022-09-18_234357-removebg-preview+1.png" alt="" />
            </div>
            <div className="top-button">
                <button>Join the waitlist</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar