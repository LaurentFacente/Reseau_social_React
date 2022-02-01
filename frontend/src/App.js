import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Register from "./pages/Register";




const App = () => {
  
  return (
    <Router>
            <Routes>
                <Route path="/Feed" element={<Feed />}></Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
            </Routes>
        </Router>
  );
};

export default App;
