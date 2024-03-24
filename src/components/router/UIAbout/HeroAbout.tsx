import React from "react";

const HeroAbout = () => {
	return (
		<section className="hero --ptb">
			<div className="container">
				<div className="textbox --center">
					<h1 className="heading --h0">
						Make
						<br /> your life <span className="--green-text-cl">yours</span>
					</h1>
				</div>
				<div className="hero__img --img1">
					<img src="/img/hero-img-1.jpg" alt="" />
				</div>
				<div className="hero__img --img2">
					<img src="/img/hero-img-2.jpg" alt="" />
				</div>
				<div className="hero__img --img3">
					<img src="/img/hero-img-3.jpg" alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroAbout;
