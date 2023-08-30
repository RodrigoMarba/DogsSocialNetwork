import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

function Home() {
	return (
		<section className="container mainContainer">
			<Head title="Feed" description="Website Home page" />
			<Feed />
		</section>
	);
}

export default Home;
