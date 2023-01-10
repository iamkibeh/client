import React from "react";
import About from '../moringa-clone-pages/About'
import HeroSection from "../moringa-clone-pages/HeroSection";
import SponsoreSectionUI from "../moringa-clone-pages/SponsoreSectionUI";
import "../../styles/HomePageStles/SponsoreSection.css";
const HomePage = () => {
	return (
		<div>
			{/* Home page here */}
			<HeroSection />
      <About />
			<SponsoreSectionUI />
		</div>
	);
};

export default HomePage;
