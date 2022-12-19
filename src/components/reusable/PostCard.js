import { Avatar } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Icon } from "@iconify/react";
function PostCard({ props }) {
	return (
		<div className="card-post">
			<div className="more-option-card">
				<div className="profile-img-card">
					<Avatar src={props.profileImage} />
					<div className="profile-name-card">
						<div className="name-span">
							<h2>{props.userName}</h2>
							<span>{props.createdAt}</span>
						</div>
						<p>{props.profession}</p>
					</div>
				</div>
				<IconButton aria-label="delete">
					<MoreHorizIcon />
				</IconButton>
			</div>
			<div className="post-title">
				<h1>{props.postTitle}</h1>
				<p>{props.postComment}</p>
			</div>
			<div className="post-img-card">
				<img src={props.postImg} alt="Post" />
			</div>
			<div className="reaction-post-card">
				<div className="icons-post-card">
					<div className="left-like">
						<Icon
							icon="simple-line-icons:like"
							width="20"
							height="20"
							color="#666363"
							className="like"
						/>
						<p>Like</p>
					</div>
					<div className="right-comment">
						<Icon
							icon="material-symbols:mode-comment-outline"
							width="20"
							height="20"
							color="#666363"
							className="comment"
						/>
						<p>comment</p>
					</div>
				</div>
				<p>{props.comments.length} comments</p>
			</div>
		</div>
	);
}

export default PostCard;
