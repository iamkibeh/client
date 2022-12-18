import { Avatar } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function PostCard() {
	return (
		<div className="card-post">
			<div className="more-option-card">
				<div className="profile-img-card">
					<Avatar src="" />
					<div className="profile-name-card">
						<div className="name-span">
							<h2>Noddyboi</h2>
							<span>7 hours ago</span>
						</div>
						<p>Software Engineer</p>
					</div>
				</div>
				<IconButton aria-label="delete">
					<MoreHorizIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default PostCard;
