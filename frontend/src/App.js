import React, { useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";



const App = () => {
  
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
