import { useStorage } from "@/components/context/StorageProvider";
import { ArrowIcon } from "@/components/elements/Icon";
import LatestActivityItem from "@/components/router/UIHome/LatestActivityItem";
import React from "react";

const LatestActivities = ({ dataActivity }: any) => {
	const { lang } = useStorage();

	return (
		<section className="latestactivities --ptb">
			<div className="container">
				<div className="textbox --mb --center">
					<h2 className="heading --h2 textbox --center --capitalize">
						{lang == "vi" ? "Hoạt động mới nhất" : "Latest Activities"}
					</h2>
				</div>
				<div className="sliderpost">
					<div className="list-card" id="sliderlatest">
						{dataActivity?.map((item: any, index: number) => <LatestActivityItem key={index} {...item} />)}
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
		</section>
	);
};

export default LatestActivities;
