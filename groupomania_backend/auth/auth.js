const jwt = require("jsonwebtoken");
const privateKey = require("./private_Key");

module.exports = (req, res, next) => {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader) {
		return res
			.status(401)
			.json({ message: "Vous n'avez pas fourni de jeton d'authentification." });
	}

	const token = authorizationHeader.split(" ")[1];

	try {
		const decodedToken = jwt.verify(token, privateKey);
		req.userId = decodedToken.userId; // Ajout du userId à l'objet request
		next();
	} catch (error) {
		return res
			.status(401)
			.json({
				message:
					"L'utilisateur n'est pas autorisé à accéder à cette ressource.",
				data: error,
			});
	}
};
