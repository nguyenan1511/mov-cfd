import { useStorage } from "@/components/context/StorageProvider";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

const CourseActivity = ({ image, title, description, slug, updatedAt }: any) => {
	const { lang } = useStorage();
	const href = `/activities/${slug?.[lang]}`;
	return (
		<div className="course">
			<div className="course__img">
				<Link href={href} aria-label={href}>
					<img src={image} alt="" />
				</Link>
			</div>
			<div className="course__info">
				<h2 className="heading --h2 line-clamp-2">{title?.[lang]}</h2>
				{/* <p
					className="desc line-clamp-2"
					dangerouslySetInnerHTML={{
						__html: description?.[lang],
					}}
				></p> */}
				<p className="desc line-clamp-2">{dayjs(updatedAt || "")?.format("DD/MM/YYYY")}</p>
				<Link href={href} className="btn btn-fill">
					{lang == "vi" ? "Xem thêm" : "Learn more"}
				</Link>
			</div>
		</div>
	);
};

export default CourseActivity;
