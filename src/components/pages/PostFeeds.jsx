import React, { useState } from "react";
import Select from "react-select";
import NavBarCard from "../reusable/NavBarCard";
import Button from "@mui/material/Button";
import PostCard from "../reusable/PostCard";
import "../../styles/PostCard.css";
import FeedSideNews from "../reusable/FeedSideNews";
import TrendingPosts from "../reusable/TrendingPosts";
const options = [
	{ value: "All posts", label: "All posts" },
	{ value: "Latest posts", label: "Latest posts" },
	{ value: "Oldest posts", label: "Oldest posts" },
];
function PostFeeds() {
	const posts = [
		{
			id: 0,
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
			comments: [1, 2, 3, 4, 5, 6, 4, 3, 3, 5, 7, 8, 8, 6, 5],
		},
		{
			id: 1,
			profileImage:
				"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
			userName: "James Margo",
			createdAt: "8 hours ago",
			profession: "UI-UX Designer",
			postTitle: "Get the best design for your prodeucts",
			postComment:
				"A lot of you want to know how much time is required to become Data Analyst. Here is a tool-by-tool learning roadmap for freshers",
			postImg:
				"https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			comments: [1, 2, 3, 4],
		},
		{
			id: 2,
			profileImage:
				"https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
			userName: "James Margo",
			createdAt: "8 hours ago",
			profession: "Software Developer",
			postTitle: "Started a new position as a software developer @google",
			postComment:
				"A lot of you want to know how much time is required to become Data Analyst. Here is a tool-by-tool learning roadmap for freshers",
			postImg:
				"https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			comments: [1, 2, 3, 4, 45, 45, 45, 34, 23, 23],
		},
		{
			id: 3,
			profileImage:
				"https://media.licdn.com/dms/image/C4D0BAQHfxC5SVqC0Ag/company-logo_100_100/0/1643977798099?e=2147483647&v=beta&t=V2xm7wRTGGRSkycQitRu-Gk7rQiwg6Z8TINQt0KlOyk",
			userName: "Moringa School",
			createdAt: "8 hours ago",
			profession: "Software Engineer",
			postTitle: "How to Become a data analyst by spending 0$",
			postComment:
				"A lot of you want to know how much time is required to become Data Analyst. Here is a tool-by-tool learning roadmap for freshers",
			postImg:
				"https://i0.wp.com/techweez.com/wp-content/uploads/2022/06/image2-scaled.jpg?fit=2560%2C1707&ssl=1",
			comments: [1, 2, 3, 4, 323, 4, 7, 4, 5, 3, 5, 5, 4, 4, 3, 3],
		},
		{
			id: 4,
			profileImage:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			userName: "Maureen Kamau",
			createdAt: "12 hours ago",
			profession: "Software Engineer",
			postTitle: "Just Started a new Startup - pay softly",
			postComment:
				"A lot of you want to know how much time is required to become Data Analyst. Here is a tool-by-tool learning roadmap for freshers",
			postImg:
				"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			comments: [1, 2, 3, 4, 34, 56, 76, 23],
		},
		{
			id: 5,
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
			comments: [1, 2, 3, 4, 5, 6, 7, 4, 6, 8, 4],
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
					<TrendingPosts />
				</div>
			</div>
			<div className="empty"></div>
		</div>
	);
}

export default PostFeeds;
