import axios from "axios";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Login from "./pages/AuthForm/Login/Login";
import Register from "./pages/AuthForm/Register/Register";
import Feed from "./pages/Feed/Feed";
import "./styles.css";

// Initialisation du token au démarrage
const token = localStorage.getItem("token");
if (token) {
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/feed' element={<Feed />} />
				<Route path='/article/:id' element={<Article />} />
			</Routes>
		</Router>
	);
};

export default App;
