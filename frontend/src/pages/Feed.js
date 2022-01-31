
import "./Feed.css";
import axios from "axios";
import React, { useEffect } from "react";


const Feed = () => {
    useEffect(() => {
   
        // "Get JWT token "
        axios
          .post(
            "http://localhost:3000/api/login",
            { username: "Laurent", password: "Laurent" },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => res.data)
          .then((res) => {
            console.log(res);
            return res.token;
          })
          .then((token) => fetchPostlist(token));
      }, []);
    
      // "Get post list "
      const fetchPostlist = (token) => {
        return axios
          .get("http://localhost:3000/api/posts", {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((res) => res.data)
          .then((res) => console.log(res));
      };
    
    return (
        <div>
             <p>Feed d'actualitées de l'app</p>       
        </div>
    );
};

export default Feed;