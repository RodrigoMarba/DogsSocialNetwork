import React, { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
	const [title, setTitle] = useState(null);
	const location = useLocation();

	useEffect(() => {
		const pathname = location.pathname;
		switch (pathname) {
			case "/account":
				setTitle("My account");
				break;
			case "/account/stats":
				setTitle("Statistics");
				break;
			case "/account/post":
				setTitle("Post your photo");
				break;
			default:
				setTitle("My account");
		}
	}, [location]);

	return (
		<header className={styles.header}>
			<h1 className="title">{title}</h1>
			<UserHeaderNav />
		</header>
	);
};

export default UserHeader;
