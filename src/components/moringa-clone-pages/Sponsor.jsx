import React from "react";

function Sponsor(props) {
	return (
		<div className="sponsor-img">
			<img src={props.company.img} alt="" />
		</div>
	);
}

export default Sponsor;
