import React from "react";
import "../../styles/NavigationBar.css";
import logo from "../../img/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

function NavigationBar() {
	const [jobs, setJobs] = React.useState(true);
	const [started, SetStarted] = React.useState(true);

	const handleJobs = (e) => {
		setJobs((current) => !current);
	};

	const handleStarted = (e) => {
		setJobs((current) => !current);
	};
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
						<Link to="/c/home/" className="icon-name">
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
						<Link to="/m/memmbers" className="icon-name">
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
					<div className="view-more">
						<div className="align-item-btn">
							<ExpandMoreRoundedIcon />
							<h3 onClick={handleJobs}>Get Started</h3>
						</div>
						{started && (
							<>
								<div className="nav-menu">
									<Link to="/m/all-jobs/" className="icon-name">
										<div className="options-menu jobs-section">
											🏠
											<p>Welcome</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/all-jobs/" className="icon-name">
										<div className="options-menu jobs-section">
											👉
											<p>Start Here</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/all-jobs/" className="icon-name">
										<div className="options-menu jobs-section">
											❓<p>FAQ</p>
										</div>
									</Link>
								</div>
							</>
						)}
					</div>
					<div className="view-more">
						<div className="align-item-btn">
							<ExpandMoreRoundedIcon />
							<h3 onClick={handleJobs}>Jobs Board</h3>
						</div>
						{jobs && (
							<>
								<div className="nav-menu">
									<Link to="/m/all-jobs/" className="icon-name">
										<div className="options-menu jobs-section">
											<Icon
												icon="uim:briefcase"
												color="#fc6c0f "
												height="20px"
												width="20px"
											/>
											<p>All Jobs</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/front-end/" className="icon-name">
										<div className="options-menu jobs-section">
											<Icon
												icon="uim:briefcase"
												color="#fc6c0f "
												height="20px"
												width="20px"
											/>
											<p>Front-End</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/back-end/" className="icon-name">
										<div className="options-menu jobs-section">
											<Icon
												icon="uim:briefcase"
												color="#fc6c0f "
												height="20px"
												width="20px"
											/>
											<p>Back-End</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/full-stack/" className="icon-name">
										<div className="options-menu jobs-section">
											<Icon
												icon="uim:briefcase"
												color="#fc6c0f "
												height="20px"
												width="20px"
											/>
											<p>Full-Stack</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/mobile/" className="icon-name">
										<div className="options-menu jobs-section">
											<Icon
												icon="uim:briefcase"
												color="#fc6c0f "
												height="20px"
												width="20px"
											/>
											<p>Mobile</p>
										</div>
									</Link>
								</div>
								<div className="nav-menu">
									<Link to="/m/devops/" className="icon-name">
										<div className="options-menu jobs-section">
											<Icon
												icon="uim:briefcase"
												color="#fc6c0f "
												height="20px"
												width="20px"
											/>
											<p>DevOps</p>
										</div>
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
