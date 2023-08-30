import React, { lazy, useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
	const { data, error, loading, request } = useFetch();

	useEffect(() => {
		async function getData() {
			const { url, options } = STATS_GET();
			await request(url, options);
		}
		getData();
	}, [request]);

	if (error) <Error error={error} />;
	if (loading) <Loading />;
	if (data) {
		return (
			<React.Suspense fallback={<Loading />}>
				<Head title="Statistics" />
				<UserStatsGraphs data={data} />
			</React.Suspense>
		);
	} else return null;
};

export default UserStats;
