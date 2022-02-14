import React, { Fragment, useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Register from "./pages/Register";
import Article from "./pages/Article";
import axios from "axios";

const token = localStorage.getItem('token')

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `${token}`;
    return config;
  },
 error => {
   return Promise.reject(error);
 }
)

const App = () => {
 
  return (
     
         <Router>
          
             <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/Feed" element={<Feed />}/>
                <Route path="/:id" element={<Article />}/>
                
            </Routes>
            
        </Router>
       
  );
};

export default App;
