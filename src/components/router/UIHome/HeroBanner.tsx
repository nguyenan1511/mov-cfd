import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";
import React, { useEffect } from "react";

const HeroBanner = ({ dataPage }: any) => {
	const { lang } = useStorage();

	useEffect(() => {
		const timeoutFn = setTimeout(() => {
			function mouseMoveParallax() {
				const elems = document.querySelectorAll(".hero .parallax");
				function parallax(e: any) {
					elems.forEach(function (elem: any) {
						let speed = elem.getAttribute("data-speed") as any;
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
			<div className="container parallax">
				<div className="textbox --center">
					<h1 className="heading --h2 wow fadeInUp" data-wow-delay="0.5s">
						{/* Tại MOV, chúng tôi cam kết phát triển <br />
						lĩnh vực Phân tích Hành vi Ứng dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và khóa
						học chất lượng cao. */}
						{dataPage?.[lang]?.name}
					</h1>
					<Link href="/about" className="btn btn-fill --center wow fadeInUp" data-wow-delay="0.4s">
						{dataPage?.[lang]?.buttonName}
					</Link>
				</div>
				<div className="parallax hero__img --img1" data-speed="-5">
					<img
						src={dataPage?.[lang]?.image1 || "/img/hero-img-1.jpg"}
						alt=""
						className="wow fadeIn"
						data-wow-delay="0.8s"
					/>
				</div>
				<div className="parallax hero__img --img2" data-speed="-3">
					<img
						src={dataPage?.[lang]?.image2 || "/img/hero-img-2.jpg"}
						alt=""
						className="wow fadeIn"
						data-wow-delay="1.2s"
					/>
				</div>
				<div className="parallax hero__img --img3" data-speed="4">
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

export default HeroBanner;
