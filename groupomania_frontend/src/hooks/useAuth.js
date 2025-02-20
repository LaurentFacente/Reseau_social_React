import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleLogin = async (username, password) => {
		try {
			const res = await axios.post("http://localhost:3000/api/login", {
				username,
				password,
			});

			if (res.data.errors) {
				setError(res.data.errors.username || "Identifiants incorrects");
				return false;
			}

			localStorage.setItem("token", res.data.token);
			navigate("/Feed");
			return true;
		} catch (err) {
			console.error("Erreur de connexion :", err);
			setError("Erreur serveur");
			return false;
		}
	};

	const handleRegister = async (username, password) => {
		try {
			const res = await axios.post("http://localhost:3000/api/register", {
				username,
				password,
			});

			if (res.data.errors) {
				setError(res.data.errors);
				return false;
			}

			alert("Votre profil a été créé avec succès !");
			navigate("/");
			return true;
		} catch (err) {
			console.error("Erreur d'inscription :", err);
			setError({ username: "Erreur serveur", password: "" });
			return false;
		}
	};

	return { handleLogin, handleRegister, error };
};
