import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Article.css";
import { FaTrashAlt } from 'react-icons/fa';




const Article = () => {
 
 const Admin = () =>{
 const adminId = '1';
 const id = localStorage['Id']; 
 console.log(adminId)
 console.log(id)
 if(adminId != id){
   return null
 }
return(
 <div className='btn_suppr' onClick={deleteArticle}><FaTrashAlt /></div>
)
}


  // On recuperer l'ID du post grace a useParams
    const { id } = useParams();

    useEffect(() => {
        getArticle()
      },[])
    // On defini un etat pour l'article
      const [article, setArticle] = useState([])
    //Logique de recuperation de l'article
      const getArticle = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/posts/" + id )
          console.log(res.data.data)
          setArticle(res.data.data)
          
        } catch (error) {
          alert(error.message)
        }
      }
      // Gestion de la logique de supression d'un article
      const deleteArticle = async () => {
        try {
          const res = await axios.delete("http://localhost:3000/api/posts/" + id )
          console.log(`L'article ${ id } à été suprimé`)
          setArticle(res.data.data)
          window.location = "/Feed";
          
        } catch (error) {
          alert(error.message)
        }
      }
      // Gestion de la logique de supression d'un User
      const deleteProfil = async () => {
        // On recupere l'Id de l'utilisateur dans le local storage
        console.log(localStorage['Id'])
        const id = localStorage['Id']
        
        try {
          // On declanche la supression, on clear le local storage et on redirige l'utilisateur
          const res = await axios.delete("http://localhost:3000/api/user/" + id )
          console.log(`L'user ${ id } à été suprimé`)
          localStorage.clear();
          window.location = "/Register";
          
        } catch (error) {
          alert(error.message)
        }
      }

  return (
    <div>
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
          <a className='login_button' onClick={() =>localStorage.clear()} href="http://localhost:3001/">Déconnexion</a>
          </div> 
          </header>
       
              <div key={article.id} className="container_article">
               
                  <Admin />
                    <div className="square_article">
                      <img src={article.attachment} className="mask_article"></img>
                      <div className="h1_article">{article.title}</div>
                      <p>{article.content}</p>
                    </div>
              </div>
              <Footer></Footer>
    </div>
  )
}

export default Article
