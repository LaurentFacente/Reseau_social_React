import "./Feed.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";








const Posts = () => {

    useEffect(() => {
      console.log('useEffect a été appelé')
      getPosts()
    },[])

    const [posts, setPosts] = useState([])
  
  

    const getPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/posts")
        setPosts(res.data.data)
        
      } catch (error) {
        alert(error.message)
        
      }
    }

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [attachment, setAttachment] = useState("")
    const [prevPicture, setPrevPictture] = useState('')
    
    
    

    const handlePicture = (e) => {
      setPrevPictture(URL.createObjectURL(e.target.files[0])) 
      setAttachment(URL.createObjectURL(e.target.files[0]))
     
    
      }
    
    const handlePost = async (e) => {
        const data = new FormData();
        data.append('title', title)
        data.append('content', content)
        data.append('attachment', prevPicture)
        console.log(data)
        e.preventDefault();
        axios({method: "post", url: 'http://localhost:3000/api/posts',
          data: {title,content,attachment},
        })
    }

    
    return (
          
      <div>
        <Header />
        <div className="container">  
          <form 
          id="contact"
          action="/api/posts" 
          method="POST"
          encType="multipart/form-data">
          <p className="creez">Creez et partager un article avec vos collaborateurs</p>
              <textarea  
              name="title" 
              id="message" 
              placeholder="Donnez un titre a votre article" 
              onChange={(e) => setTitle(e.target.value)}value={title} 
              className="textareatitle" >
              </textarea>
              <textarea 
              name="content" 
              id="message" 
              placeholder="Ecrivez un article !" 
              onChange={(e) => setContent(e.target.value)}value={content} 
              className="textAreaContent" ></textarea>
              <div className="parent-div">
              <button className="btn-upload">Ajoutez une photo
              </button>
              <input 
               name="attachment" 
               type="file" 
               id="attachment"  
               onChange={(e) => handlePicture(e)}/>
              <div>
                <img src={prevPicture}>
                  </img>
                  </div>
              </div>
              <button 
              name="submit" 
              type="submit" 
              onClick={handlePost}>Envoyer
              </button> 
          </form>
        </div>

            {posts.slice(0).reverse().map((post) => (
              
              <Link to={`/${post.id}`} key={post.id} className="container">
                <div className="square">
                     <img src={post.attachment} className="mask"></img>
                     <div className="h1">{post.title}</div>
                     <p>{post.content}</p>
                   
                </div>
              </Link>
            ))}
             
      </div>
      
    )
    
};

export default Posts;