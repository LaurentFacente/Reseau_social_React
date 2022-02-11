import React from 'react'
import './Header.css'


function Header() {
  return (
    <header>
    <div>
      <img className="logo" src="./images/icon-left-font-monochrome-white.png" alt="Groupomania" />
    </div>
    <div>
      <a className='login_button' href="http://localhost:3001/">Logout</a>
    </div>
      
  </header>
  )
}

export default Header;
