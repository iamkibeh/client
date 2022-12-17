import React from "react";
import { Icon } from "@iconify/react";
import "../../styles/NavigationBar.css";

function Footer() {
	return (
		<div className="footer-section">
			<div className="footer-inner">
				<div className="left-side">
					<Icon icon="ph:copyright-light" />
					<h6>Moringa School</h6>
				</div>
				<div className="right-side">
					<Icon className="icon-footer" icon="bi:linkedin" color="white" />
					<Icon
						className="icon-footer"
						icon="ant-design:facebook-filled"
						color="white"
					/>
					<Icon
						className="icon-footer"
						icon="ri:instagram-fill"
						color="white"
					/>
					<Icon
						className="icon-footer"
						icon="ant-design:twitter-square-filled"
						color="white"
					/>
				</div>
			</div>
		</div>
	);
}

export default Footer;
