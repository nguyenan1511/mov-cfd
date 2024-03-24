import React from "react";

const Volunteers = () => {
	return (
		<section className="volunteers --pb">
			<div className="textbox --mb --center">
				<h2 className="heading --h2 textbox --center --capitalize">Volunteers &amp; Interns</h2>
			</div>
			<div className="container">
				<div className="volunteers__list">
					<div className="item">
						<img srcSet="/img/volunteers-logo-1.png 2x" alt="" />
					</div>
					<div className="item">
						<img srcSet="/img/volunteers-logo-2.png 2x" alt="" />
					</div>
					<div className="item">
						<img srcSet="/img/volunteers-logo-3.png 2x" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Volunteers;
