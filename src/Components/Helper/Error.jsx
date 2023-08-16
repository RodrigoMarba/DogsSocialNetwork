import React from "react";

function Error({ error }) {
	if (!error) return null;
	return <div style={{ color: "#f31", margin: "1rem 0" }}>{error}</div>;
}

export default Error;
