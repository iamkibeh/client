import React from "react";
import Sponsor from "./Sponsor";
import SponsoreSection from "./SponsoreSection";
import { data } from "./sponsors";
function SponsoreSectionUI() {
	// console.log()
	return (
		<div className="sponsor-parent-conatiner">
			<SponsoreSection />
			<div className="sponsor-list-data">
				{data.map((company) => (
					<Sponsor key={company.id} company={company} />
				))}
			</div>
		</div>
	);
}

export default SponsoreSectionUI;
