import React from "react";
import { Link } from "react-router-dom";
import styles from "./Feed.module.css";

const PostList = ({ posts }) => {
	return (
		<div className={styles.postList}>
			{posts
				.slice(0)
				.reverse()
				.map((post) => (
					<Link to={`/${post.id}`} key={post.id} className={styles.post}>
						<div className={styles.postContainer}>
							<img
								src={post.attachment}
								alt={post.title}
								className={styles.postImage}
							/>
							<h2 className={styles.postTitle}>{post.title}</h2>
							<p className={styles.postContent}>{post.content}</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default PostList;
