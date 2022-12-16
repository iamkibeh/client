import React from "react";
import "../../styles/NavigationBar.css";
import logo from "../../img/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

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
				<div className="nav-menus">
					<div className="nav-menu">
						<Link to="/myportfolio/" className="icon-name">
							<div className="options-menu">
								<Icon
									icon="ic:round-search"
									color="#666363 "
									height="20px"
									width="20px"
								/>
								<p>Search</p>
							</div>
						</Link>
					</div>
					<div className="nav-menu">
						<Link to="/myportfolio/" className="icon-name">
							<div className="options-menu">
								<Icon
									icon="material-symbols:home-outline-rounded"
									color="#666363 "
									height="20px"
									width="20px"
								/>
								<p>Home</p>
							</div>
						</Link>
					</div>
					<div className="nav-menu">
						<Link to="/myportfolio/" className="icon-name">
							<div className="options-menu">
								<Icon
									icon="ic:outline-notifications-none"
									color="#666363 "
									height="20px"
									width="20px"
								/>
								<p>Notifications</p>
							</div>
						</Link>
					</div>
					<div className="nav-menu">
						<Link to="/myportfolio/" className="icon-name">
							<div className="options-menu">
								<Icon
									icon="tabler:message-circle"
									color="#666363 "
									height="20px"
									width="20px"
								/>
								<p>Direct Messages</p>
							</div>
						</Link>
					</div>
					<div className="nav-menu">
						<Link to="/myportfolio/" className="icon-name">
							<div className="options-menu">
								<Icon
									icon="ri:group-line"
									color="#666363 "
									height="20px"
									width="20px"
								/>
								<p>Memmbers</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
