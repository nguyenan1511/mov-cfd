import { useStorage } from "@/components/context/StorageProvider";
import KnowledgeHubItem from "@/components/router/UIHome/KnowledgeHubItem";
import Link from "next/link";
import React from "react";

export const KnowledgeHub = ({ dataKnowledge }: any) => {
	const { lang } = useStorage();

	return (
		<section className="scknowledgehub --ptb wow fadeInUp">
			<div className="container">
				<div className="textbox --mb --center">
					<h2 className="heading --h2 textbox --center --capitalize">
						{lang == "vi" ? "Kiến thức" : "Knowledge Hub"}
					</h2>
				</div>
				<div className="scknowledgehub__list list-textbox-card">
					{dataKnowledge?.map((item: any, index: number) => <KnowledgeHubItem key={index} {...item} />)}
				</div>
				<Link href="/knowledge" className="btnviewall btn btn-fill --center" aria-label="Các bài viết khác">
					{lang == "vi" ? "Các bài viết khác" : "Learn More"}
				</Link>
			</div>
		</section>
	);
};
