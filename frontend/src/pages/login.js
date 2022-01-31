import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="loginPage">
           <img className="logo" src="../images/icon-left-font-monochrome-white.png" alt="groupomania icon" width="300px"></img>
           <h1>Bienvenue sur le reseau social de Groupomania</h1>
           <div className="login-page">
                <div className="form">
                    <form class="login-form">
                         <input type="text" placeholder="username"/>
                         <input type="password" placeholder="password"/>
                        <button>Login</button>
                         <p className="message">Si c'est votre premiere connexion, cette action vous créra un compte.</p>
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default Login;