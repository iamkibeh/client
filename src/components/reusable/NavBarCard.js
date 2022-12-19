import React from "react";

function NavBarCard(props) {
	const classes = "navbar-card " + props.className;
	return <div className={classes}>{props.children}</div>;
}
export default NavBarCard;
