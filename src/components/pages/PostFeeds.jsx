import React, { useState } from "react";
import Select from "react-select";
import NavBarCard from "../reusable/NavBarCard";
import Button from "@mui/material/Button";
import PostCard from "../reusable/PostCard";
import "../../styles/PostCard.css";
const options = [
	{ value: "All posts", label: "All posts" },
	{ value: "Latest posts", label: "Latest posts" },
	{ value: "Oldest posts", label: "Oldest posts" },
];
function PostFeeds() {
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
				<PostCard />
			</div>
		</div>
	);
}

export default PostFeeds;
