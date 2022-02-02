import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      withCredentials: false,
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        console.log(res);
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
           <img className="logo" src="../images/icon-left-font-monochrome-white.png" alt="groupomania icon" width="300px"></img>
           <h1>Bienvenue sur le reseau social de Groupomania</h1>
           <div className="login-page">
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
    );
};

export default Login;