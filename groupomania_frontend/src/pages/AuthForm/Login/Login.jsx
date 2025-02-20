import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAuth } from "../../../hooks/useAuth";
import "../AuthForm.styles.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { handleLogin, error } = useAuth();

	const onSubmit = async (e) => {
		e.preventDefault();
		await handleLogin(username, password);
	};

	return (
		<div className='authPage'>
			<Header />
			<div className='container_all'>
				<div className='container_text'>
					<h1>Bienvenue sur Groupomania</h1>
					<p className='presentation'>
						Connectez-vous pour échanger et collaborer avec vos collègues.
					</p>
				</div>

				<div className='container_form'>
					<div className='form'>
						<div className='message2'>Connexion</div>
						<form onSubmit={onSubmit} className='auth-form'>
							<input
								type='text'
								placeholder="Nom d'utilisateur"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>

							<input
								type='password'
								placeholder='Mot de passe'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>

							<button type='submit'>Connexion</button>
							{error && <p className='error'>{error}</p>}
							<p className='message'>
								Pas encore inscrit ? <Link to='/Register'>Créez un compte</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
