import axios from "axios";
import { useEffect, useState } from "react";

const usePosts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			try {
				const res = await axios.get("http://localhost:3000/api/posts");
				setPosts(res.data.data);
			} catch (error) {
				alert("Vous n'avez pas accès à cette page, veuillez vous connecter.");
				window.location.href = "/";
			}
		};

		getPosts();
	}, []);

	return { posts, setPosts };
};

export default usePosts;
