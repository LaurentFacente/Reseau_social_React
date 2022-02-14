import React from 'react'
import './Header.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function Header() {
 

  return (
    <header>
    <div>
    <Link to="/Feed">
      <img className="logo" src="./images/icon-left-font-monochrome-white.png" alt="Groupomania" />
      </Link>
    </div>
    <div>
      <a className='login_button' onClick={() =>localStorage.clear()} href="http://localhost:3001/">Logout</a>
    </div>
      
  </header>
  )
}

export default Header;
