import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import imgBarnner from "../../img/banner2.png";
import "../../styles/hireTalent.css";

const HireTalent = () => {
	const navigate = useNavigate();
	const myPath = window.location.pathname;

	const handleSignInClick = () => {
		myPath === "/hire-talent/login"
			? navigate("/hire-talent")
			: navigate("/hire-talent/login");
	};
	return (
		<>
			<div className="hire-talent-container">
				<div className="hire-talent-left-container">
					<img
						src={
							myPath === "/hire-talent/login"
								? "https://images.pexels.com/photos/6579980/pexels-photo-6579980.jpeg?auto=compress&cs=tinysrgb&w=600"
								: imgBarnner
						}
						alt="developer holding a tablet"
					/>
					<div className="overlay-image-container"></div>
				</div>
				<div className="hire-talent-right-container">
					<div className="hire-talent-header-nav">
						<div className="hire-navigation-bar">
							<div className="logo">
								<img src={logo} alt="moringa school logo" />
							</div>
							<button className="sign-in-btn" onClick={handleSignInClick}>
								{myPath === "/hire-talent/login" ? "Sign Up" : "Sign In"}
							</button>
						</div>
					</div>
					<div className="hire-talent-body">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default HireTalent;
