import { useStorage } from "@/components/context/StorageProvider";
import asset from "@/plugins/asset";
import Link from "next/link";
import React from "react";

const Course = (props: any) => {
	const { name, description, teams, slug, image } = props;

	const { lang } = useStorage();

	const _team = teams?.[0] || {};

	const _link = slug?.[lang] ? `/courses/${slug?.[lang]}` : "#";

	return (
		<div className="course">
			<div className="course__img">
				<Link href={_link}>
					<img src={image || asset("/assets/img/course-img1.jpg")} alt="course-img" />
				</Link>
			</div>
			<div className="course__info">
				<h3 className="title heading --h3 --black-cl">
					{lang == "vi" ? "Các khoá học sắp khai giảng" : "Upcoming courses are about to begin"}
				</h3>
				<h2 className="heading --h1">
					<span className="heading --h3">{name?.[lang]}</span>
					{lang == "vi" ? "Ứng dụng thực hành" : "Practical application"}
				</h2>
				<p className="desc line-clamp-2">{description?.[lang]}</p>
				<div className="teacher small">
					<div className="teacher__img">
						<img src={_team?.image || asset("/assets/img/img-lectur.jpg")} alt="" />
					</div>
					<div className="teacher__info">
						<p className="teacher__info-name">{_team?.name}</p>
						<p className="teacher__info-rank">{_team?.jobTitle?.[lang]}</p>
					</div>
				</div>
				<Link href={_link} className="btn btn-fill">
					{lang == "vi" ? "Xem thêm" : "Learn more"}
				</Link>
			</div>
		</div>
	);
};

export default Course;
