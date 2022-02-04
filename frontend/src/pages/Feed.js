
import "./Feed.css";
import axios from "axios";
import React, { useEffect, useState } from "react";



const Posts = () => {

    useEffect(() => {
      getPosts()
    },)

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState([false])

    const getPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/posts")
        setPosts(res.data.data)
        setLoading(true)
      } catch (error) {
        alert(error.message)
        
      }
    }

    
    return (
          
      <div>
         
            {posts.slice(0).reverse().map((post) => (
              <div key={post.id} className="container">
              <div className="square">
              <div >
              <img src={post.attachment} className="mask"></img>
               <div className="h1">{post.title}</div>
                <p>{post.content}</p>
                </div>
                </div>
            </div>
              ))}
             


      </div>
      
    )
    
};

export default Posts;