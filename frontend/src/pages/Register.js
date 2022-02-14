import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".username.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: 'http://localhost:3000/api/register',
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
          window.location = "/";
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
                <div className="message2">Inscription </div>
                    <form action="" onSubmit={handleRegister} id="sign-up-form" className="login-form">
                    <label htmlFor="username"></label>
                         <input type="text" name="username" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}value={username}/>
                         <label htmlFor="password"></label>
                         <input type="password" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}value={password}/>
                         <button type="submit" href="/Feed">Inscription</button>
                         <p className="message">Vous avez deja un compte ? <Link to="/">Connectez vous</Link></p>
                    </form>
                    </div>
                 </div>
            </div>
            <Footer />
            </div>
        
    );
};

export default Register;