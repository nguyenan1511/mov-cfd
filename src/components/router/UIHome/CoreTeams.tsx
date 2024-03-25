import { ArrowIcon } from "@/components/elements/Icon";
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
									<img src="/img/core-team-1.jpg" alt="" />
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
									<img src="/img/core-team-2.jpg" alt="" />
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
									<img src="/img/core-team-3.jpg" alt="" />
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
								<ArrowIcon />
							</button>
							<p className="sliderpaging">
								<span className="current">1</span> of <span className="total">0</span>
							</p>
							<button className="btn btn-control --next">
								<ArrowIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoreTeams;
