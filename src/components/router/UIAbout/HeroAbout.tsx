import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const HeroAbout = ({ dataPage }: any) => {
	const { lang } = useStorage();
	return (
		<section className="hero --ptb">
			<div className="container">
				<div className="textbox --center">
					<h1
						className="heading --h0 wow fadeInUp"
						dangerouslySetInnerHTML={{
							__html: dataPage?.[lang]?.name,
						}}
					>
						{/* Make
						<br /> your life <span className="--green-text-cl">yours</span> */}
						{}
					</h1>
				</div>
				<div className="hero__img --img1 wow fadeIn" data-wow-delay="0.6s">
					<img src={dataPage?.[lang]?.image1 || "/img/hero-img-1.jpg"} alt="" />
				</div>
				<div className="hero__img --img2 wow fadeIn" data-wow-delay="1s">
					<img src={dataPage?.[lang]?.image2 || "/img/hero-img-2.jpg"} alt="" />
				</div>
				<div className="hero__img --img3 wow fadeIn" data-wow-delay="0.8s">
					<img src={dataPage?.[lang]?.image3 || "/img/hero-img-3.jpg"} alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroAbout;
