import React from "react";
import { Link } from "react-router-dom";
import styles from "./Feed.module.css";

const FeedHeader = ({ onDelete }) => {
	return (
		<header className={styles.header}>
			<div>
				<Link to='/Feed'>
					<img
						className={styles.logo}
						src='/images/icon-left-font-monochrome-white.png'
						alt='Groupomania'
					/>
				</Link>
			</div>
			<div>
				<button className={styles.deleteButton} onClick={onDelete}>
					Supprimer mon profil
				</button>
			</div>
			<div>
				<button
					className={styles.logoutButton}
					onClick={() => localStorage.clear()}
				>
					Déconnexion
				</button>
			</div>
		</header>
	);
};

export default FeedHeader;
