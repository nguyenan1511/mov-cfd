import Link from "next/link";
import React from "react";

const ActivitiesList = ({ className = "" }) => {
	return (
		<section className={`activitieslist ${className}`}>
			<div className="container">
				<div className="textbox --mb --center">
					<h2 className="heading --h2 textbox --center --capitalize">Previous class</h2>
				</div>
				<div className="sliderpost prevclass">
					<div className="list-card" id="prevclass">
						<div className="card">
							<div className="card__img">
								<Link href="article-detail.html">
									<img src="/img/event-card1.jpg" alt="img-event" />
								</Link>
							</div>
							<div className="card__info">
								<h3>
									<Link href="article-detail.html" className="heading --h4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
									</Link>
								</h3>
								<p className="date">20/2/2024</p>
							</div>
						</div>
						<div className="card">
							<div className="card__img">
								<Link href="article-detail.html">
									<img src="/img/event-card2.jpg" alt="img-event" />
								</Link>
							</div>
							<div className="card__info">
								<h3>
									<Link href="article-detail.html" className="heading --h4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
									</Link>
								</h3>
								<p className="date">20/2/2024</p>
							</div>
						</div>
						<div className="card">
							<div className="card__img">
								<Link href="article-detail.html">
									<img src="/img/event-card3.jpg" alt="img-event" />
								</Link>
							</div>
							<div className="card__info">
								<h3>
									<Link href="article-detail.html" className="heading --h4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
									</Link>
								</h3>
								<p className="date">20/2/2024</p>
							</div>
						</div>
						<div className="card">
							<div className="card__img">
								<Link href="article-detail.html">
									<img src="/img/event-card4.jpg" alt="img-event" />
								</Link>
							</div>
							<div className="card__info">
								<h3>
									<Link href="article-detail.html" className="heading --h4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
									</Link>
								</h3>
								<p className="date">20/2/2024</p>
							</div>
						</div>
					</div>
					<div className="controlsslider">
						<button className="btn btn-control --prev">
							<svg
								width={20}
								height={8}
								viewBox="0 0 20 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64644ZM20 3.5L1 3.5L1 4.5L20 4.5L20 3.5Z"
									fill="#003CA4"
								/>
							</svg>
						</button>
						<p className="sliderpaging">
							<span className="current">1</span> of <span className="total">0</span>
						</p>
						<button className="btn btn-control --next">
							<svg
								width={20}
								height={8}
								viewBox="0 0 20 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64644ZM20 3.5L1 3.5L1 4.5L20 4.5L20 3.5Z"
									fill="#003CA4"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActivitiesList;
