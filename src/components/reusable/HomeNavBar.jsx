import React from "react";
import img from "../../img/logo.png";
import "../../styles/NavBar.css";
import AccountMenu from "./AccountMenu";
function HomeNavBar() {
	return (
		<div className="navbar-section-logo">
			<div className="moringa-log">
				<div className="logo">
					<img src={img} alt="Moringa Logo" />
				</div>
				<AccountMenu />
			</div>
		</div>
	);
}

export default HomeNavBar;
