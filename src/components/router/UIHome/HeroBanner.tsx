import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";
import React from "react";

const HeroBanner = ({ dataPage }: any) => {
	const { lang } = useStorage();
	return (
		<section className="hero --ptb">
			<div className="container">
				<div className="textbox --center">
					<h1 className="heading --h2">
						{/* Tại MOV, chúng tôi cam kết phát triển <br />
						lĩnh vực Phân tích Hành vi Ứng dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và khóa
						học chất lượng cao. */}
						{dataPage?.[lang]?.name}
					</h1>
					<Link href="/about" className="btn btn-fill --center">
						{dataPage?.[lang]?.buttonName}
					</Link>
				</div>
				<div className="hero__img --img1">
					<img src={dataPage?.[lang]?.image1 || "/img/hero-img-1.jpg"} alt="" />
				</div>
				<div className="hero__img --img2">
					<img src={dataPage?.[lang]?.image2 || "/img/hero-img-2.jpg"} alt="" />
				</div>
				<div className="hero__img --img3">
					<img src={dataPage?.[lang]?.image3 || "/img/hero-img-3.jpg"} alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
