import { useStorage } from "@/components/context/StorageProvider";
import React, { useEffect } from "react";

const HeroAbout = ({ dataPage }: any) => {
	const { lang } = useStorage();

	useEffect(() => {
		const timeoutFn = setTimeout(() => {
			function mouseMoveParallax() {
				const elems = document.querySelectorAll(".hero .parallax");
				function parallax(e: any) {
					elems.forEach(function (elem: any) {
						let speed = elem?.getAttribute?.("data-speed") as any;
						let x = (e.clientX * speed) / 80;
						let y = (e.clientY * speed) / 80;
						if (window.innerWidth >= 767) {
							elem.style.transform = `translate(${x}px, ${y}px)`;
						} else {
							elem.style.transform = `initial`;
						}
					});
				}
				if (window.innerWidth >= 767) {
					document.addEventListener("mousemove", parallax);
				}
			}
			mouseMoveParallax();
		}, 1000);
		return () => clearTimeout(timeoutFn);
	}, []);

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
				<div className="hero__img --img1 parallax" data-speed="3">
					<img
						src={dataPage?.[lang]?.image1 || "/img/hero-img-1.jpg"}
						alt=""
						className="wow fadeIn"
						data-wow-delay="0.8s"
					/>
				</div>
				<div className="hero__img --img2 parallax" data-speed="2">
					<img
						src={dataPage?.[lang]?.image2 || "/img/hero-img-2.jpg"}
						alt=""
						className="wow fadeIn"
						data-wow-delay="1.2s"
					/>
				</div>
				<div className="hero__img --img3 parallax" data-speed="4">
					<img
						src={dataPage?.[lang]?.image3 || "/img/hero-img-3.jpg"}
						alt=""
						className="wow fadeIn"
						data-wow-delay="1s"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroAbout;
