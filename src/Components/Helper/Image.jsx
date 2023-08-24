import React, { useState } from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, ...props }) => {
	const [skeleton, setSkeleton] = useState(true);

	function handleLoad(e) {
		e.target.style.opacity = 1;
		setSkeleton(false);
	}

	return (
		<div className={styles.wrapper}>
			{skeleton && <div className={styles.skeleton}></div>}
			<img onLoad={handleLoad} className={styles.img} src={src} alt={alt} {...props} />
		</div>
	);
};

export default Image;
