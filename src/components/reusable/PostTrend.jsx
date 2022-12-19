import { Avatar } from "@mui/material";
import React from "react";

function PostTrend({ props }) {
	return (
		<div className="details-post">
			<div className="date-car">
				<Avatar src={props.avatar} />
			</div>
			<div className="title-event">
				<h2>{props.eventTitle}</h2>
				<p>{props.eventTime}</p>
			</div>
		</div>
	);
}

export default PostTrend;
