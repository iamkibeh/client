import React from "react";

function Sponsor(props) {
	console.log(props);
	return (
		<div className="sponsor-img">
			<img src={props.company.img} alt="" />
		</div>
	);
}

export default Sponsor;
