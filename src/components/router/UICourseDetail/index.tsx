import { useStorage } from "@/components/context/StorageProvider";
import Accordion from "@/components/router/UICourseDetail/Accordion";
import $ from "jquery";
import Link from "next/link";
import { useEffect } from "react";
const nl2br = require("react-nl2br");

const UICourseDetail = ({ dataPage }: any) => {
	const { lang } = useStorage();

	useEffect(() => {
		if (typeof window == "undefined") return;
		document.body.classList.add("coursedetailpage");
		return () => document.body.classList.remove("coursedetailpage");
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

	const {
		image,
		content,
		name,
		title,
		description,
		required,
		contact,
		teams,
		namePrev,
		nameNext,
		titleNext,
		titlePrev,
		slugPrev,
		slugNext,
		imageMobile,
	} = dataPage || {};

	return (
		<>
			<section className="coursedthero">
				<div className="textbox --center --white-cl">
					<h1 className="heading --h2">
						<span className="heading --h3">{name?.[lang]}</span>
						Giới thiệu ABA
					</h1>
					<div className="desc">
						<p>{nl2br(title?.[lang])}</p>
					</div>
				</div>
				<img
					src={image}
					srcSet={`${imageMobile} 767w, ${image} 2560w`}
					sizes="(max-width: 767px) 100vw, (max-width: 2560px) 100vw"
					alt=""
					className="img"
				/>
			</section>

			<section className="coursedtcontent --ptb">
				<div className="container">
					<article>
						<div className="content overview">
							<h2 className="heading --h4 --uppercase">
								{lang == "vi" ? "Khoá học này dành cho ai?" : "Who is this course for?								"}
							</h2>
							<div
								className="text"
								dangerouslySetInnerHTML={{
									__html: description?.[lang],
								}}
							></div>
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
								{/* <div className="group__item">
									<p className="heading --h4">Hotline</p>
									<p>{contact?.hotline}</p>
								</div> */}
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
								<div key={index} className="desc">
									<strong>{item?.title}</strong>
									<br />
									{item?.description?.map((itemChild: any, indexChild: number) => (
										<div
											key={indexChild}
											dangerouslySetInnerHTML={{
												__html: itemChild,
											}}
										></div>
									))}
								</div>
							))}
						</div>

						<div className="content teachersbox">
							<h2 className="heading --h4 --uppercase">{lang == "vi" ? "Giảng viên" : "Teacher"}</h2>
							<div className="teacher">
								<div className="teacher__img">
									<img src={teams?.[0]?.image} alt="" />
								</div>
								<div className="teacher__info">
									<p className="teacher__info-name heading --h3">{teams?.[0]?.name}</p>
									<p className="teacher__info-rank">{teams?.[0]?.jobTitle?.[lang]}</p>
									<div
										className="teacher__info-text"
										dangerouslySetInnerHTML={{
											__html: teams?.[0]?.description?.[lang],
										}}
									></div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
			<section className="articlecontrols">
				<div className="container">
					<article className={`articlecontrols__link ${slugPrev?.[lang] ? "" : "opacity-0 invisible"} `}>
						<Link href={`/courses/${slugPrev?.[lang]}`} className="articlecontrols__link-icon">
							<svg
								width="67"
								height="16"
								viewBox="0 0 67 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.292892 7.2929C-0.0976334 7.68342 -0.0976333 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928937C7.68054 0.538413 7.04738 0.538413 6.65685 0.928937L0.292892 7.2929ZM67 7L1 7.00001L1 9.00001L67 9L67 7Z"
									fill="white"
								/>
							</svg>
						</Link>
						<h3 className="title">
							<Link href={`/courses/${slugPrev?.[lang]}`} className="text --white-cl">
								<span className="text">
									{lang == "vi" ? "Đến khóa học trước đó" : "Previous Course"}
								</span>
								<strong>
									<span>{namePrev?.[lang]}</span>
									{titlePrev?.[lang]}
								</strong>
							</Link>
						</h3>
					</article>

					<article className={`articlecontrols__link ${slugNext?.[lang] ? "" : "opacity-0 invisible"}`}>
						<Link href={`/courses/${slugNext?.[lang]}`} className="articlecontrols__link-icon">
							<svg
								className="rotate-180"
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
						</Link>
						<h3 className="title">
							<Link href={`/courses/${slugNext?.[lang]}`} className="text --white-cl">
								<span className="text">{lang == "vi" ? "Đến khóa học tiếp theo" : "Next Course"}</span>
								<strong className="title">
									<span>{nameNext?.[lang]}</span>
									{titleNext?.[lang]}
								</strong>
							</Link>
						</h3>
					</article>
				</div>
			</section>
		</>
	);
};

export default UICourseDetail;
