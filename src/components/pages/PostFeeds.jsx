import React, { useState } from "react";
import Select from "react-select";
import NavBarCard from "../reusable/NavBarCard";
import Button from "@mui/material/Button";
import PostCard from "../reusable/PostCard";
import "../../styles/PostCard.css";
import FeedSideNews from "../reusable/FeedSideNews";
const options = [
	{ value: "All posts", label: "All posts" },
	{ value: "Latest posts", label: "Latest posts" },
	{ value: "Oldest posts", label: "Oldest posts" },
];
function PostFeeds() {
	const posts = [
		{
			id: 1,
			profileImage:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			userName: "Denis Ouma",
			createdAt: "2 hours ago",
			profession: "Software Engineer",
			postTitle: "How to Become a data analyst by spending 0$",
			postComment:
				"A lot of you want to know how much time is required to become Data Analyst. Here is a tool-by-tool learning roadmap for freshers",
			postImg:
				"https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
			comments: [1, 2, 3, 4, 5, 6],
		},
		{
			id: 1,
			profileImage:
				"https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
			userName: "Kibet Immanuel Ngèno",
			createdAt: "8 hours ago",
			profession: "Software Engineer",
			postTitle: "How to Become a data analyst by spending 0$",
			postComment:
				"A lot of you want to know how much time is required to become Data Analyst. Here is a tool-by-tool learning roadmap for freshers",
			postImg:
				"https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			comments: [1, 2, 3, 4],
		},
	];
	const [selectedOption, setSelectedOption] = useState("null");
	return (
		<div className="feed-section-page">
			<div className="prime-container">
				<NavBarCard className="cad-items">
					<h1>Home</h1>
					<div className="home-details">
						<div className="category-post">
							<Select
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={options}
								placeholder="Posts"
							/>
						</div>
						<div className="add-post">
							<Button
								variant="contained"
								color="success"
								style={{ fontWeight: "800" }}
							>
								New Post
							</Button>
						</div>
					</div>
				</NavBarCard>
			</div>
			<div className="feed-section">
				<div className="feed">
					{posts.map((post) => (
						<div className="post-card" key={post.id}>
							<PostCard props={post} />
						</div>
					))}
				</div>
				<div className="news">
					<FeedSideNews />
				</div>
			</div>
			<div className="empty"></div>
		</div>
	);
}

export default PostFeeds;
