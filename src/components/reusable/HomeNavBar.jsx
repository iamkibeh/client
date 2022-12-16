import React from "react";
import img from "../../img/logo.png";
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
function HomeNavBar() {
	return (
		<div className="navbar-section-logo">
			<div className="moringa-log">
				<div className="logo">
					<img src={img} alt="Moringa Logo" />
				</div>
				<div className="profile-img">
					<div className="profile-pic">
						<img
							src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
							alt="Profile"
						/>
					</div>
					<div className="name-position">
						<IconButton aria-label="delete">
							<Icon
								icon="material-symbols:expand-more-rounded"
								// width="30"
								// height="30"
							/>
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeNavBar;
