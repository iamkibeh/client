import React, { useState } from "react";
import Select from "react-select";
import NavBarCard from "../reusable/NavBarCard";
import Button from "@mui/material/Button";
const options = [
	{ value: "All posts", label: "All posts" },
	{ value: "Latest posts", label: "Latest posts" },
	{ value: "Oldest posts", label: "Oldest posts" },
];
function PostFeeds() {
	const [selectedOption, setSelectedOption] = useState("null");
	return (
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
							// styles={{ width: "200px" }}
						/>
					</div>
					<div className="add-post">
						{" "}
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
	);
}

export default PostFeeds;
