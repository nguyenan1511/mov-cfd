import { useStorage } from "@/components/context/StorageProvider";
import asset from "@/plugins/asset";
import React, { Fragment, useEffect } from "react";
const nl2br = require("react-nl2br");
import $ from "jquery";
import Accordion from "@/components/router/UICourseDetail/Accordion";

const UICourseDetail = ({ dataPage }: any) => {
	const { lang } = useStorage();

	useEffect(() => {
		if (typeof window == "undefined") return;
		document.body.classList.add("coursedetailpage");
	}, []);

	useEffect(() => {
		$(".accordion-button").click(function () {
			let label = $(this);
			let parent = label.parent(".accordion-item");
			let list = label.siblings(".accordion-content");

			if (parent.hasClass("is-open")) {
				list.slideUp(200);
				parent.removeClass("is-open");
			} else {
				list.slideDown(200);
				parent.addClass("is-open");
			}
		});
	}, []);

	const { image, content, name, title, description, required, contact } = dataPage || {};

	console.log("🚀dataPage---->", dataPage);

	return (
		<>
			<section className="coursedthero" style={{ backgroundImage: `url(${image})` }}>
				<div className="textbox --center --white-cl">
					<h1 className="heading --h2">
						<span className="heading --h3">{name?.[lang]}</span>
						Giới thiệu ABA
					</h1>
					<div className="desc">
						<p>{nl2br(title?.[lang])}</p>
					</div>
				</div>
			</section>

			<section className="coursedtcontent --ptb">
				<div className="container">
					<article>
						<div className="content overview">
							<h2 className="heading --h4 --uppercase">
								{lang == "vi" ? "Khoá học này dành cho ai?" : "Who is this course for?								"}
							</h2>
							<div className="text">
								<p>{description?.[lang]}</p>
							</div>
						</div>
						<div className="content contactbox">
							<h2 className="heading --h4 --uppercase">
								{lang == "vi" ? "Thông tin liên hệ" : "Contact information"}
							</h2>
							<div className="group">
								<div className="group__item">
									<p className="heading --h4">Email</p>
									<p>{contact?.email}</p>
								</div>
								<div className="group__item">
									<p className="heading --h4">Hotline</p>
									<p>{contact?.phone}</p>
								</div>
							</div>
						</div>
						<div className="content accordionbox">
							<h2 className="heading --h4 --uppercase">
								{lang === "vi" ? "Nội dung chương trình" : "Program content"}
							</h2>
							<Accordion data={content?.[lang]} />
						</div>
						<div className="content requirement">
							<h2 className="heading --h4 --uppercase">
								{lang === "vi" ? "Bạn cần chuẩn bị gì" : "What do you need to prepare?"}
							</h2>
							{required?.[lang]?.map((item: any, index: number) => (
								<p key={index}>
									<strong>{item?.title}</strong>
									<br />
									{item?.description?.map((itemChild: any, indexChild: number) => (
										<Fragment key={indexChild}>
											{itemChild}
											<br />
										</Fragment>
									))}
								</p>
							))}
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
