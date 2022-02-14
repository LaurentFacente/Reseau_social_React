import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Article.css";
import { FaTrashAlt } from 'react-icons/fa';




const Article = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log('useEffect a été appelé')
        getArticle()
      },[])
  
      const [article, setArticle] = useState([])
    
      const getArticle = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/posts/" + id )
          console.log(res.data.data)
          setArticle(res.data.data)
          
        } catch (error) {
          alert(error.message)
        }
      }

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


  return (
    <div>
        <Header></Header>
       
       <div key={article.id} className="container_article">
       <div className='btn_suppr' onClick={deleteArticle}><FaTrashAlt /></div>
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
