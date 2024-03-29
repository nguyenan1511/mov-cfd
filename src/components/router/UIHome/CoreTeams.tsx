import { useStorage } from "@/components/context/StorageProvider";
import { ArrowIcon } from "@/components/elements/Icon";
import CoreTeamItems from "@/components/router/UIHome/CoreTeamItems";
import React from "react";

const CoreTeams = ({ dataTeam }: any) => {
	const { lang } = useStorage();
	return (
		<section className="coreteams --ptb">
			<div className="textbox --mb --center wow fadeInUp">
				<h2 className="heading --h2 textbox --center --capitalize">
					{lang == "vi" ? "Đội ngũ chuyên môn" : "The Core team"}
				</h2>
			</div>
			<div className="coreteams__slider wow fadeInRight" data-wow-delay="0.3s">
				<div className="container">
					<div className="coreteams__wrap">
						<div className="coreteams__inner" id="slidercoreteam">
							{dataTeam?.map((item: any, index: number) => <CoreTeamItems key={index} {...item} />)}
						</div>
						<div className="controlsslider">
							<button className="btn btn-control --prev" aria-label="prev">
								<ArrowIcon />
							</button>
							<p className="sliderpaging">
								<span className="current">1</span> of <span className="total">0</span>
							</p>
							<button className="btn btn-control --next" aria-label="next">
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
