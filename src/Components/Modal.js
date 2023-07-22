import React from "react";
import FAQs from "./FAQs";
import Donate from "./Donate";
import Privacy from "./Privacy";
import Pricing from "./Pricing";
import ReactDOM from "react-dom";

const PortfolioPortal = (props) => {
	const { showPortal, setShowPortal } = props;

	return (
		<React.Fragment>
			{showPortal
				? ReactDOM.createPortal(
						<React.Fragment>
							
						</React.Fragment>,
						document.getElementById("portals")
				  )
				: ""}
		</React.Fragment>
	);
};

export default PortfolioPortal;
