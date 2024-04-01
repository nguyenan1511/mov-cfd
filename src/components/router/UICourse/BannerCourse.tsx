import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const BannerCourse = ({ data = {} }: any) => {
	const { lang } = useStorage();

	return (
		<div className="textbox --center">
			<h1 className="heading --h2">{data?.name?.[lang]}</h1>
			<div className="desc">
				<div>
					<strong>{data?.title?.[lang]}</strong>
					<p
						dangerouslySetInnerHTML={{
							__html: data?.description?.[lang],
						}}
					></p>
				</div>
			</div>
		</div>
	);
};

export default BannerCourse;
