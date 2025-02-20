import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAuth } from "../../../hooks/useAuth";
import "../AuthForm.styles.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister, error } = useAuth(); 

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(username, password);
  };

  return (
    <div className='authPage'>
      <Header />
      <div className='container_all'>
        <div className='container_text'>
          <h1>Bienvenue sur Groupomania</h1>
          <h2>Travaillez plus efficacement, ensemble</h2>
          <p className='presentation'>
            Le réseau social d'entreprise Groupomania simplifie le partage
            d'informations et facilite le travail collaboratif.
          </p>
        </div>

        <div className='container_form'>
          <div className='form'>
            <div className='message2'>Inscription</div>
            <form onSubmit={onSubmit} className='auth-form'>
              <input
                type='text'
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error?.username && <p className='error'>{error.username}</p>}

              <input
                type='password'
                placeholder='Mot de passe'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error?.password && <p className='error'>{error.password}</p>}



              <button type='submit'>Inscription</button>
              <p className='message'>
                Vous avez déjà un compte ? <Link to='/'>Connectez-vous</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
