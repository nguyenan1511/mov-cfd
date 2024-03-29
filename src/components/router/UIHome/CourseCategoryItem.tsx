import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";
import React from "react";

const CourseCategoryItem = ({ slug, name, description, tags, countNumberCateg, id }: any) => {
	const { lang } = useStorage();

	const href = slug?.[lang] ? `/courses?category=${id}` : "#";

	return (
		<div className="textbox-card">
			<h2 className="title">
				<Link
					href={href}
					className={`heading --h4 ${countNumberCateg > 0 ? "" : "pointer-events-none"}`}
					aria-label={href}
				>
					{name?.[lang]}
				</Link>
			</h2>
			<p
				className="text --small line-clamp-2"
				dangerouslySetInnerHTML={{
					__html: description?.[lang],
				}}
			></p>
			{tags?.[lang]?.map(
				(item: any, index: number) =>
					index < 1 && (
						<h4 key={index} className="label-card btn btn-green">
							{item}
						</h4>
					)
			)}
			<Link
				href={href}
				className={`btn-card btn btn-fill ${countNumberCateg > 0 ? "" : "pointer-events-none"}`}
				aria-label={href}
			>
				{lang == "vi" ? "Xem thêm" : "Learn more"}
			</Link>
		</div>
	);
};

export default CourseCategoryItem;
