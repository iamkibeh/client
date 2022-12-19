import React from "react";
import PostTrend from "./PostTrend";

function TrendingPosts() {
	const trendingPosts = [
		{
			id: 0,
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			eventTitle: "Just Finished My software development @moringa school",
			eventTime: "12:00 PM - 01:00 PM +03",
		},
		{
			id: 1,
			avatar:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
			eventTitle: "Welcome to Business Cooperate",
			eventTime: "05:00 PM - 06:00 PM +03",
		},
		{
			id: 2,
			avatar:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			eventTitle: "Best Teem Ever",
			eventTime: "05:00 PM - 06:00 PM +03",
		},
		{
			id: 3,
			avatar:
				"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			eventTitle: "Welcome to moringa school Alumni portal",
			eventTime: "03:00 PM - 04:30 PM +03",
		},
	];
	return (
		<div className="news-feed">
			<h2>Trending Posts</h2>
			<div className="upcoming-events">
				{trendingPosts.map((event) => (
					<div className="event-data" key={event.id}>
						<PostTrend props={event} />
					</div>
				))}
			</div>
		</div>
	);
}

export default TrendingPosts;
