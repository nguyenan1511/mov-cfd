import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const AboutContent = ({ dataPage }: any) => {
	const { lang } = useStorage();
	return (
		<section className="aboutcontent --pb">
			<div className="container">
				<div className="aboutcontent__inner">
					<div className="contentbox">
						<h2 className="heading --h4">{dataPage?.[lang]?.title1}</h2>
						<div
							className="contentbox__text"
							dangerouslySetInnerHTML={{
								__html: dataPage?.[lang]?.description1,
							}}
						></div>
					</div>
					<div className="contentbox ">
						<h2 className="heading --h4 --last">{dataPage?.[lang]?.title2}</h2>
						<div
							className="contentbox__text"
							dangerouslySetInnerHTML={{
								__html: dataPage?.[lang]?.description2,
							}}
						></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutContent;
