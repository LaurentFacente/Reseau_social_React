import React, { useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Feed from "./pages/Feed";



const App = () => {
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
    <Router>
            <Routes>
                <Route path="/Feed" element={<Feed />}></Route>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </Router>
  );
};

export default App;
