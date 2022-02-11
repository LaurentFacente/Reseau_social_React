import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Register from "./pages/Register";
import Article from "./pages/Article";



const App = () => {
  
  return (
    
    <Router>
      <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Feed" element={<Feed />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/:id" element={<Article />}></Route>
                
            </Routes>
        </Router>
  );
};

export default App;
