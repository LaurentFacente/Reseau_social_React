import axios from "axios";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Login from "./pages/AuthForm/Login/Login";
import Register from "./pages/AuthForm/Register/Register";
import Feed from "./pages/Feed";
import "./styles.css";

// Recuperation du token JWT dans le local storage
const token = localStorage.getItem("token");
// On utilise cette methode pour soumettre notre token a toute les routes qui en on besoin pour etre affichée
axios.interceptors.request.use(
	(config) => {
		config.headers.authorization = `${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

//Logique de routing de l'application
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />}></Route>
				<Route path='/Register' element={<Register />}></Route>
				<Route path='/Feed' element={<Feed />} />
				<Route path='/:id' element={<Article />} />
			</Routes>
		</Router>
	);
};

export default App;
