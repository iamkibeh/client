import { Avatar } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Icon } from "@iconify/react";
function PostCard() {
	return (
		<div className="card-post">
			<div className="more-option-card">
				<div className="profile-img-card">
					<Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
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
			<div className="post-title">
				<h1>How to Become a data analyst by spending 0$</h1>
				<p>
					A lot of you want to know how much time is required to become Data
					Analyst. Here is a tool-by-tool learning roadmap for freshers
				</p>
			</div>
			<div className="post-img-card">
				<img
					src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
					alt="Post"
				/>
			</div>
			<div className="reaction-post-card">
				<div className="icons-post-card">
					<Icon
						icon="simple-line-icons:like"
						width="20"
						height="20"
						color="#666363"
						className="like"
					/>
					<Icon
						icon="material-symbols:mode-comment-outline"
						width="20"
						height="20"
						color="#666363"
						className="comment"
					/>
				</div>
				<p>5 comments</p>
			</div>
		</div>
	);
}

export default PostCard;
