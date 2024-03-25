import React from "react";

const Partners = () => {
	return (
		<section className="partners">
			<div className="container">
				<div className="heading --h3">Đối tác của MOV</div>
				<div className="partners__list">
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-1.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-2.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-3.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-4.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-5.png 2x" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
