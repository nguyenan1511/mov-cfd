import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import { ArrowIcon } from "@/components/elements/Icon";
import LatestActivityItem from "@/components/router/UIHome/LatestActivityItem";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const ActivitiesList = ({ className = "", id = "prevclass", dataCategory = {} }: any) => {
	const { lang } = useStorage();
	const { getDataActivity } = useMainApi();

	const { data: dataActivity } = useQuery({
		queryFn: async () => {
			const res = await getDataActivity(`?category=${dataCategory?.id}`);
			if (res) {
				return res?.data?.activities;
			}
			return null;
		},
		queryKey: [`activity-${dataCategory?.id}`],
		staleTime: TIME_STALE, // 60 seconds
	});

	return (
		<section className={`activitieslist ${className}`}>
			<div className="container">
				<div className="textbox --mb --center">
					<h2 className="heading --h2 textbox --center --capitalize">{dataCategory?.name?.[lang]}</h2>
				</div>
				<div className={`sliderpost ${id}`}>
					<div className="list-card" id={`${id}`}>
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

export default ActivitiesList;
