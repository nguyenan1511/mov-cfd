import React from "react";

const CoreTeams = () => {
	return (
		<section className="coreteams --ptb">
			<div className="textbox --mb --center">
				<h2 className="heading --h2 textbox --center --capitalize">The Core team</h2>
			</div>
			<div className="coreteams__slider">
				<div className="container">
					<div className="coreteams__wrap">
						<div className="coreteams__inner" id="slidercoreteam">
							<div className="course">
								<div className="course__img">
									<img src="img/core-team-1.jpg" alt="" />
								</div>
								<div className="course__info">
									<h2 className="heading --h3">Doan Nguyen</h2>
									<p className="position heading --h5 --uppercase">THS.NCS</p>
									<div className="desc">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
										doloremque laudantium perspiciatis unde omnis iste natus error.
									</div>
								</div>
							</div>
							<div className="course">
								<div className="course__img">
									<img src="img/core-team-2.jpg" alt="" />
								</div>
								<div className="course__info">
									<h2 className="heading --h3">Hung Vo</h2>
									<p className="position heading --h5 --uppercase">THS.NCS</p>
									<div className="desc">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
										doloremque laudantium perspiciatis unde omnis iste natus error.
									</div>
								</div>
							</div>
							<div className="course">
								<div className="course__img">
									<img src="img/core-team-3.jpg" alt="" />
								</div>
								<div className="course__info">
									<h2 className="heading --h3">Truong Bao Ngoc</h2>
									<p className="position heading --h5 --uppercase">THS.NCS</p>
									<div className="desc">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
										doloremque laudantium perspiciatis unde omnis iste natus error.
									</div>
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
			</div>
		</section>
	);
};

export default CoreTeams;
