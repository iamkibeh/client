import React from "react";

function UpcomingEvents({ props }) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	return (
		<div className="details-post">
			<div className="date-card">
				<h3>{day}</h3>
				<h3>{month.slice(0, 3)}</h3>
			</div>
			<div className="title-event">
				<h2>{props.eventTitle}</h2>
				<p>{props.eventTime}</p>
			</div>
		</div>
	);
}

export default UpcomingEvents;
