import React, { useState } from "react";
import Select from "react-select";
import NavBarCard from "../reusable/NavBarCard";
import Button from "@mui/material/Button";
const options = [
	{ value: "All ", label: "All" },
	{ value: "Latest", label: "Latest" },
	{ value: "Oldest", label: "Oldest" },
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
							placeholder="All Posts"
						/>
					</div>
					<div className="add-post">
						{" "}
						<Button variant="contained" color="success">
							Success
						</Button>
					</div>
				</div>
			</NavBarCard>
		</div>
	);
}

export default PostFeeds;
