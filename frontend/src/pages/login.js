import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from '../components/Footer';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".username.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: 'http://localhost:3000/api/login',
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", "Bearer " + res.data.token)
        localStorage.setItem('Id', res.data.data.id)
            
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.username;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/Feed";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


    return (
        <div className="loginPage">
          <Header />
          <div className="container_all">
          <div className="container_text">
           <h1>Bienvenue sur le reseau social de Groupomania</h1>
           <h2>Travaillez plus efficacement, ensemble</h2>
           <p className="presentation">Le réseau social d'entreprise Groupomania simplifie le partage d'information dans votre entreprise et facilite le travail collaboratif, au quotidien.</p>
           <div className="login-page">
            </div>
            </div>
            <div className="container_form">
                <div className="form">
                  <div className="message2">Connexion </div>
                    <form action="" onSubmit={handleLogin} id="sign-up-form" className="login-form">
                    <label htmlFor="username"></label>
                         <input type="text" name="username" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}value={username}/>
                         <label htmlFor="password"></label>
                         <input type="password" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}value={password}/>
                         <button type="submit" href="/Feed">Connexion</button>
                         <p className="message">Pas encore inscrit ? <Link to="/Register">Créez un compte</Link></p>
                    </form>
                 </div>
            </div>
            
            </div>
            <Footer />
        </div>
    );
};

export default Login;