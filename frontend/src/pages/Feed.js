
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

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [attachment, setAttachment] = useState(null)
    const [file, setFile] = useState()
    

    const handlePicture = (e) => {
      setAttachment(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      }
    
    const handlePost = async (e) => {
      e.preventDefault();
      axios({
        method: "post",
        url: 'http://localhost:3000/api/posts',
        data: {
          title,
          content,
          attachment
        },
      })
    }

    
    return (
          
      <div>
        <div className="container">  
          <form id="contact" action="" method="post">
          <p className="creez">Creez et partager un article avec vos collaborateurs</p>
              <textarea  name="title" id="message" placeholder="Donnez un titre a votre article" onChange={(e) => setTitle(e.target.value)}value={title} className="textareatitle" ></textarea>
              <fieldset>
              <textarea name="content" id="message" placeholder="Ecrivez un article !" onChange={(e) => setContent(e.target.value)}value={content} className="textAreaContent" ></textarea>
              </fieldset>
              <input name="attachment" type="file" id="attachment" onChange={(e) => handlePicture(e)} />
             <fieldset>
              <button name="submit" type="submit" onClick={handlePost} >Envoyer</button>
             </fieldset>
          </form>

        
        </div>
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