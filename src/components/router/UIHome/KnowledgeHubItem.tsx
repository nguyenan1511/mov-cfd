import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";
import React from "react";

const KnowledgeHubItem = ({ slug, name, description, tags, type = "knowledge", category }: any) => {
	const { lang } = useStorage();

	const href = slug?.[lang] ? `/${type}/${slug?.[lang]}` : "#";

	return (
		<div className="textbox-card">
			<h2 className="title">
				<Link href={href} className="heading --h4" aria-label={href}>
					{name?.[lang]}
				</Link>
			</h2>
			<p
				className="text --small line-clamp-3"
				dangerouslySetInnerHTML={{
					__html: description?.[lang],
				}}
			></p>
			{/* {tags?.[lang]?.map(
				(item: any, index: number) =>
					index < 1 && (
						<h4 key={index} className="label-card btn btn-green">
							{item}
						</h4>
					)
			)} */}
			<h4 className="label-card btn btn-green">{category?.name?.[lang]}</h4>
			<Link href={href} className="btn-card btn btn-fill" aria-label={href}>
				{lang == "vi" ? "Xem thêm" : "Learn more"}
			</Link>
		</div>
	);
};

export default KnowledgeHubItem;
