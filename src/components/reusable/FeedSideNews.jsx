import React from "react";
import UpcomingEvents from "./UpcomingEvents";

function FeedSideNews() {
	const upcomingEvents = [
		{
			id: 0,
			date: new Date("2023-08-25"),
			eventTitle: "Google Africa Scholarship - Nairobi Kenya",
			eventTime: "12:00 PM - 01:00 PM +03",
		},
		{
			id: 1,
			date: new Date("2023-11-30"),
			eventTitle: "Masterclass - How to Network If You're an Introvert",
			eventTime: "05:00 PM - 06:00 PM +03",
		},
		{
			id: 2,
			date: new Date("2023-01-16"),
			eventTitle: "Masterclass - How to Network if You are an Introvert (AF)",
			eventTime: "05:00 PM - 06:00 PM +03",
		},
		{
			id: 3,
			date: new Date("2023-05-13"),
			eventTitle: "Fellowship Town Hall (New Year's Edition 🚀)",
			eventTime: "03:00 PM - 04:30 PM +03",
		},
	];

	return (
		<div className="news-feed">
			<h2>Upcoming events</h2>
			<div className="upcoming-events">
				{upcomingEvents.map((event) => (
					<div className="event-data" key={event.id}>
						<UpcomingEvents props={event} />
					</div>
				))}
			</div>
		</div>
	);
}

export default FeedSideNews;
