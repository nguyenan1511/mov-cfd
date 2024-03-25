import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const CoreTeamItems = ({ image = "", name, description, jobTitle }: any) => {
	const { lang } = useStorage();
	return (
		<div className="course">
			<div className="course__img">
				<img src={image || "/img/core-team-1.jpg"} alt="" />
			</div>
			<div className="course__info">
				<h2 className="heading --h3">{name}</h2>
				<p className="position heading --h5 --uppercase">{jobTitle?.[lang]}</p>
				<div className="desc">{description?.[lang]}</div>
			</div>
		</div>
	);
};

export default CoreTeamItems;
