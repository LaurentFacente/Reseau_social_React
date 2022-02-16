import React from 'react'
import './Header.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function Header() {

  
  
  const deleteProfil = async () => {
    console.log(localStorage['Id'])
    const id = localStorage['Id']
    
    try {
      const res = await axios.delete("http://localhost:3000/api/user/" + id )
      console.log(`L'user ${ id } à été suprimé`)
      localStorage.clear();
      window.location = "/Register";
      
    } catch (error) {
      alert(error.message)
    }
  }
 

  return (
    <header>
    <div>
    <Link to="/Feed">
      <img className="logo" src="./images/icon-left-font-monochrome-white.png" alt="Groupomania" />
      </Link>
    </div>
    <div>
      <a className='delete_profil' onClick={deleteProfil} href="http://localhost:3001/Register">Suprimer mon profil</a>
    </div>
    <div>
      <a className='login_button' onClick={() =>localStorage.clear()} href="http://localhost:3001/">Logout</a>
    </div>
      
  </header>
  )
}

export default Header;
