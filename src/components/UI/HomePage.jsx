import React from "react";
import HomeNavBar from "../reusable/HomeNavBar";
import NavigationBar from "../reusable/NavigationBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../reusable/Footer";
function HomePage() {
	return (
		<div className="home-page-container">
			<HomeNavBar />
			<div className="position-bottom">
				<NavigationBar />
				<Footer />
			</div>
		</div>
	);
}

export default HomePage;
