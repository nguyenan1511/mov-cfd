import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";
import React from "react";

const HeroBanner = ({ dataPage }: any) => {
	const { lang } = useStorage();
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
				<div className="source-layer4 div hero__img --img1 wow fadeIn" data-wow-delay="0.8s">
					<img src={dataPage?.[lang]?.image1 || "/img/hero-img-1.jpg"} alt="" />
				</div>
				<div className="source-layer4 div hero__img --img2 wow fadeIn" data-wow-delay="1.2s">
					<img src={dataPage?.[lang]?.image2 || "/img/hero-img-2.jpg"} alt="" />
				</div>
				<div className="source-layer4 div hero__img --img3 wow fadeIn" data-wow-delay="1s">
					<img src={dataPage?.[lang]?.image3 || "/img/hero-img-3.jpg"} alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
