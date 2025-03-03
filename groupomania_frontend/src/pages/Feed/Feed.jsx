import axios from "axios";
import React from "react";
import Footer from "../../components/Footer";
import styles from "./Feed.module.css";
import FeedHeader from "./FeedHearder";
import usePosts from "./Hooks/usePost";
import PostForm from "./PostFom";
import PostList from "./PostList";

const Feed = () => {
	const { posts, setPosts } = usePosts();

	const refreshPosts = async () => {
		const res = await axios.get("http://localhost:3000/api/posts");
		setPosts(res.data.data);
	};

	const deleteProfil = async () => {
		const id = localStorage.getItem("Id");

		if (
			window.confirm(
				"La suppression de votre profil est irréversible. Êtes-vous sûr ?"
			)
		) {
			try {
				await axios.delete(`http://localhost:3000/api/user/${id}`);
				localStorage.clear();
				window.location.href = "/Register";
			} catch (error) {
				alert("Erreur lors de la suppression du profil.");
			}
		}
	};

	return (
		<div className={styles.feedContainer}>
			<FeedHeader onDelete={deleteProfil} />
			<PostForm onPostCreated={refreshPosts} />
			<PostList posts={posts} />
			<Footer />
		</div>
	);
};

export default Feed;
