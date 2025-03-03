import axios from "axios";
import React, { useState } from "react";
import styles from "./Feed.module.css";

const PostForm = ({ onPostCreated }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [attachment, setAttachment] = useState("");
	const [prevPicture, setPrevPicture] = useState("");

	const handlePicture = (e) => {
		const file = e.target.files[0];
		if (file) {
			setPrevPicture(URL.createObjectURL(file));
			setAttachment(file);
		}
	};

	const handlePost = async (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append("title", title);
		data.append("content", content);
		data.append("attachment", attachment);

		try {
			await axios.post("http://localhost:3000/api/posts", data);
			onPostCreated(); // Rafraîchir la liste des posts
		} catch (error) {
			console.error("Erreur lors de la création du post", error);
		}
	};

	return (
		<form className={styles.postForm} onSubmit={handlePost}>
			<h3>Créez et partagez un article</h3>
			<input
				type='text'
				placeholder="Titre de l'article"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder='Écrivez votre article...'
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<input type='file' onChange={handlePicture} />
			{prevPicture && <img src={prevPicture} alt='Prévisualisation' />}
			<button type='submit'>Publier</button>
		</form>
	);
};

export default PostForm;
