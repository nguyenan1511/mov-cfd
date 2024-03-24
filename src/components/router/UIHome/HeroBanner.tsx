import React from "react";

const HeroBanner = () => {
	return (
		<section className="hero --ptb">
			<div className="container">
				<div className="textbox --center">
					<h1 className="heading --h2">
						Tại MOV, chúng tôi cam kết phát triển <br />
						lĩnh vực Phân tích Hành vi Ứng dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và khóa
						học chất lượng cao.
					</h1>
					<a href="about-mov.html" className="btn btn-fill --center">
						About MOV
					</a>
				</div>
				<div className="hero__img --img1">
					<img src="img/hero-img-1.jpg" alt="" />
				</div>
				<div className="hero__img --img2">
					<img src="img/hero-img-2.jpg" alt="" />
				</div>
				<div className="hero__img --img3">
					<img src="img/hero-img-3.jpg" alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
