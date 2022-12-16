import React from "react";
import "../../styles/NavigationBar.css";
import logo from "../../img/logo.png";
import { Icon } from "@iconify/react";

import IconButton from "@mui/material/IconButton";
function NavigationBar() {
	return (
		<div className="dash-board-section">
			<div className="side-bar">
				<div className="top-logo-nav">
					<div className="logo-section">
						<img src={logo} alt="" />
					</div>
					<IconButton aria-label="delete">
						<Icon icon="material-symbols:expand-more-rounded" />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
