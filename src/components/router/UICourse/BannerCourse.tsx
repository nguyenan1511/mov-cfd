import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const BannerCourse = ({ data = {} }: any) => {
	const { lang } = useStorage();

	return (
		<div className="textbox --center">
			<h1 className="heading --h2">{data?.[lang]?.name}</h1>
			<div className="desc">
				<p>
					<strong>{data?.[lang]?.title}</strong>
					{data?.[lang]?.description}
				</p>
			</div>
		</div>
	);
};

export default BannerCourse;
