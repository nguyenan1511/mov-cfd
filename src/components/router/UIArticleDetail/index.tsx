import { useStorage } from "@/components/context/StorageProvider";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

const UIArticleDetail = ({ dataPage, type = "" }: any) => {
	const { slugPrev, namePrev, nameNext, slugNext, titlePrev, titleNext, updatedAt, title } = dataPage || {};

	const { lang } = useStorage();

	return (
		<>
			<section className="articledetail --ptb">
				<div className="container">
					<div className="articledetail__hero">
						<div className="textbox --center">
							<h1 className="heading --h2">{dataPage?.name?.[lang]}</h1>
							<div className="desc">
								{type === "activities" ? (
									<p>{dayjs(updatedAt || "")?.format("DD/MM/YYYY")}</p>
								) : (
									<p>{title?.[lang]}</p>
								)}
							</div>
						</div>
					</div>
					<article
						className="articledetail__content contentdetail"
						dangerouslySetInnerHTML={{
							__html: dataPage?.description?.[lang],
						}}
					>
						{/* {renderHTML(dataPage?.description?.[lang])} */}
						{/* <h2 className="heading --h4 --uppercase">Lorem ipsum dolor sit amt</h2>
						<p>
							<strong>Sed ut perspiciatis</strong>
							<br />
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
						</p>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt <br />
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt <br />
						</p>
						<img src="img/article-img1.jpg" alt="" />
						<h2 className="heading --h4 --uppercase">Lorem ipsum dolor sit amt</h2>
						<p>
							<strong>Sed ut perspiciatis</strong>
							<br />
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
						</p>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt <br />
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt <br />
						</p>
						<iframe
							width={560}
							height={315}
							src="https://www.youtube.com/embed/5ouVWbW7SsM?si=B-Oc6CCpdkr0iGKZ"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
						/>
						<h2 className="heading --h4 --uppercase">Lorem ipsum dolor sit amt</h2>
						<p>
							<strong>Sed ut perspiciatis</strong>
							<br />
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
						</p>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt <br />
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt <br />
						</p> */}
					</article>
				</div>
			</section>
			<section className="articlecontrols">
				<div className="container">
					<article className={`articlecontrols__link ${slugPrev?.[lang] ? "" : "opacity-0 invisible"} `}>
						<Link href={`/${type}/${slugPrev?.[lang]}`} className="articlecontrols__link-icon">
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
							<Link href={`/${type}/${slugPrev?.[lang]}`} className="text --white-cl">
								<span className="text ">
									{lang == "vi"
										? `${
												type === "activities"
													? "Đến hoạt động trước đó"
													: "Đến bài viết trước đó"
										  }`
										: `${type === "activities" ? "Previous post" : "Previous article"}`}
								</span>
								<strong className="line-clamp-3">
									{/* <span>{namePrev?.[lang]}</span> */}
									{titlePrev?.[lang]}
								</strong>
							</Link>
						</h3>
					</article>

					<article className={`articlecontrols__link ${slugNext?.[lang] ? "" : "opacity-0 invisible"}`}>
						<Link href={`/${type}/${slugNext?.[lang]}`} className="articlecontrols__link-icon">
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
							<Link href={`/${type}/${slugNext?.[lang]}`} className="text --white-cl">
								<span className="text">
									{lang == "vi"
										? `${
												type === "activities"
													? "Đến hoạt động tiếp theo"
													: "Đến bài viết tiếp theo"
										  }`
										: `${type === "activities" ? "Next post" : "Next article"}`}
								</span>
								<strong className="line-clamp-3">
									{/* <span>{nameNext?.[lang]}</span> */}
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

export default UIArticleDetail;
