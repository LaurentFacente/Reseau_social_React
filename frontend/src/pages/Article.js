import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from '../components/Header';


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
  return (
    <div>
        <Header></Header>
       <h2>{article.title}</h2>
       <Link to="/Feed">Retour</Link>
       <div key={article.id} className="container">
                <div className="square">
                     <img src={article.attachment} className="mask"></img>
                     <div className="h1">{article.title}</div>
                     <p>{article.content}</p>
                   
                </div>
              </div>
    </div>
  )
}

export default Article
