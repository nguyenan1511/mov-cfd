import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const Volunteers = ({ dataVolunteers }: any) => {
	const { lang } = useStorage();
	return (
		<section className="volunteers --ptb">
			<div className="textbox --mb --center">
				<h2 className="heading --h2 textbox --center --capitalize">
					{lang == "vi" ? "Tình nguyện viên và Thực tập sinh" : "Volunteers & Interns"}
				</h2>
			</div>
			<div className="container">
				<div className="volunteers__list">
					{dataVolunteers?.map((item: any, index: number) => (
						<div className="item" key={index}>
							<img srcSet={`${item?.image} 2x`} alt="" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Volunteers;
