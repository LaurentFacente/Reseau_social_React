import { api } from "./api";

export const login = async (username, password) => {
	try {
		const { data } = await api.post("login", { username, password });
		return data;
	} catch (error) {
		throw error.response ? error.response.data : "Erreur serveur";
	}
};
