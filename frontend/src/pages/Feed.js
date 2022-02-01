
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
          .then((res) => console.log(res))
          
      };
     
      
    
    return (
    <div>
        <div className="container">
            <div className="square">
                <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" alt="apple" className="mask"></img>
                    <div className="h1">Is Apple a Design Company?</div>
                <p>Apple is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world’s most revolutionized products.</p>
             </div>
        </div>
        <div className="container">
        <div className="square">
            <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" alt="apple" className="mask"></img>
                <div className="h1">Is Apple a Design Company?</div>
            <p>Apple is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world’s most revolutionized products.</p>
         </div>
    </div>
    </div>
    );
};

export default Feed;