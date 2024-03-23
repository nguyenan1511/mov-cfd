import asset from "@/plugins/asset";
import React, { useEffect } from "react";

const UICourseDetail = ({ dataPage }: any) => {
	useEffect(() => {
		if (typeof window == "undefined") return;
		document.body.classList.add("coursedetailpage");
	}, []);

	return (
		<>
			<section className="coursedthero" style={{ backgroundImage: "url(/img/banner-course-detail.jpg)" }}>
				<div className="textbox --center --white-cl">
					<h1 className="heading --h2">
						<span className="heading --h3">Practical Application Course Level 1 (PAC1)</span>
						Giới thiệu ABA
					</h1>
					<div className="desc">
						<p>Khoá học giới thiệu về lĩnh vực Phân Tích Hành Vi Ứng Dụng (ABA)</p>
					</div>
				</div>
			</section>

			<section className="coursedtcontent --ptb">
				<div className="container">
					<article>
						<div className="content overview">
							<h2 className="heading --h4 --uppercase">Khoá học này dành cho ai?</h2>
							<div className="text">
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
									voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
									magni dolores eos qui ratione voluptatem sequi nesciunt.
								</p>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
									magnam aliquam quaerat voluptatem.
								</p>
							</div>
						</div>
						<div className="content contactbox">
							<h2 className="heading --h4 --uppercase">Thông tin liên hệ</h2>
							<div className="group">
								<div className="group__item">
									<p className="heading --h4">Email</p>
									<p>info@mov.vn</p>
								</div>
								<div className="group__item">
									<p className="heading --h4">Hotline</p>
									<p>+84 92 9200 413</p>
								</div>
							</div>
						</div>
						<div className="content accordionbox">
							<h2 className="heading --h4 --uppercase">Nội dung chương trình</h2>
							<ul className="accordion">
								<li className="accordion-item">
									<h3 className="accordion-button">
										<span>Sed ut perspiciatis unde omnis iste natus error sit</span>
										<div className="arrow-icon" />
									</h3>
									<p className="accordion-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra
										elementum sit id sagittis non donec egestas.
									</p>
								</li>
								<li className="accordion-item">
									<h3 className="accordion-button">
										<span>Sed ut perspiciatis unde omnis iste natus error sit</span>
										<div className="arrow-icon" />
									</h3>
									<p className="accordion-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra
										elementum sit id sagittis non donec egestas.
									</p>
								</li>
								<li className="accordion-item">
									<h3 className="accordion-button">
										<span>Sed ut perspiciatis unde omnis iste natus error sit</span>
										<div className="arrow-icon" />
									</h3>
									<p className="accordion-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra
										elementum sit id sagittis non donec egestas.
									</p>
								</li>
								<li className="accordion-item">
									<h3 className="accordion-button">
										<span>Sed ut perspiciatis unde omnis iste natus error sit</span>
										<div className="arrow-icon" />
									</h3>
									<p className="accordion-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra
										elementum sit id sagittis non donec egestas.
									</p>
								</li>
								<li className="accordion-item">
									<h3 className="accordion-button">
										<span>Sed ut perspiciatis unde omnis iste natus error sit</span>
										<div className="arrow-icon" />
									</h3>
									<p className="accordion-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra
										elementum sit id sagittis non donec egestas.
									</p>
								</li>
							</ul>
						</div>
						<div className="content requirement">
							<h2 className="heading --h4 --uppercase">Bạn cần chuẩn bị gì</h2>
							<p>
								<strong>Sed ut perspiciatis</strong>
								<br />
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
							</p>
							<p>
								<strong>Sed ut perspiciatis</strong>
								<br />
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
							</p>
						</div>
						<div className="content teachersbox">
							<h2 className="heading --h4 --uppercase">Giảng viên</h2>
							<div className="teacher">
								<div className="teacher__img">
									<img src={asset("/img/img-lectur.jpg")} alt="" />
								</div>
								<div className="teacher__info">
									<p className="teacher__info-name heading --h3">Doan Nguyen</p>
									<p className="teacher__info-rank">THS.NCS</p>
									<p className="teacher__info-text">
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
										quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
			<section className="articlecontrols">
				<div className="container">
					<article className="articlecontrols__link">
						<a href="course-detail.html" className="articlecontrols__link-icon">
							<svg
								width={67}
								height={16}
								viewBox="0 0 67 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.292892 7.2929C-0.0976334 7.68342 -0.0976333 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928937C7.68054 0.538413 7.04738 0.538413 6.65685 0.928937L0.292892 7.2929ZM67 7L1 7.00001L1 9.00001L67 9L67 7Z"
									fill="white"
								/>
							</svg>
						</a>
						<h3 className="title">
							<a href="course-detail.html" className="text --white-cl">
								<span className="text">Khoá học trước đó</span>
								<strong>
									<span>Practical Application Course Level 2 (PAC2)</span>
									Ứng dụng thực hành
								</strong>
							</a>
						</h3>
					</article>
					<article className="articlecontrols__link">
						<a href="course-detail.html" className="articlecontrols__link-icon">
							<svg
								width={67}
								height={16}
								viewBox="0 0 67 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.292892 7.2929C-0.0976334 7.68342 -0.0976333 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928937C7.68054 0.538413 7.04738 0.538413 6.65685 0.928937L0.292892 7.2929ZM67 7L1 7.00001L1 9.00001L67 9L67 7Z"
									fill="white"
								/>
							</svg>
						</a>
						<h3 className="title">
							<a href="course-detail.html" className="text --white-cl">
								<span className="text">Khoá học trước đó</span>
								<strong className="title">
									<span>Practical Application Course Level 2 (PAC2)</span>
									Ứng dụng thực hành
								</strong>
							</a>
						</h3>
					</article>
				</div>
			</section>
		</>
	);
};

export default UICourseDetail;
