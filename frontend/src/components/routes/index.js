import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from "../../pages/home";
import login from "../../pages/login";

const index = () => {
    return (
        <Router>
            <Routes>
                <Route path='/posts' exact component={home}/>
                <Route path='/login' exact component={login}/> 
            </Routes>
        </Router>
    );
};

export default index;