import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import KnowledgeHubItem from "@/components/router/UIHome/KnowledgeHubItem";
import { TIME_STALE } from "@/constant";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UIKnowledge = ({ dataPage }: any) => {
	const { lang } = useStorage();
	const { getDataCategoryKnowledge, getDataKnowledge } = useMainApi();

	const [category, setCategory] = useState("");

	const { data: dataCategory } = useQuery({
		queryFn: async () => {
			const res = await getDataCategoryKnowledge();
			if (res) {
				return res?.data?.knowledges;
			}
			return null;
		},
		queryKey: ["cateKnowledge"],
		staleTime: TIME_STALE, // 60 seconds
	});

	const { data: dataKnowledge, mutateAsync: fetchDataKnowledge } = useMutation({
		mutationFn: async (data: any) => {
			const res = await getDataKnowledge(`?category=${data?.category}`);
			if (res?.status) {
				return res?.data?.knowledges;
			}
			return [];
		},
	});

	useEffect(() => {
		if (category) {
			fetchDataKnowledge({ category: category });
		}
	}, [category]);

	useEffect(() => {
		if (dataCategory?.length) {
			setCategory(dataCategory?.[0]?.id);
		}
	}, [dataCategory]);

	return (
		<section className="scknowledgehub --ptb">
			<div className="container">
				<h1 className="scknowledgehub__top heading --h2 textbox --center">
					{lang == "vi" ? "Kiến thức" : "Knowledge Hubs"}
				</h1>
				<div className="scknowledgehub__tabshub">
					<div className="scknowledgehub__tabshub-inner">
						{dataCategory?.length > 0
							? dataCategory?.map((item: any, index: number) => (
									<div
										className={`tab ${category == item?.id ? "active" : ""}`}
										key={index}
										onClick={() => setCategory(item?.id)}
									>
										{item?.name?.[lang]}
										<sup>(04)</sup>
									</div>
							  ))
							: ""}
					</div>
				</div>
				<div className="scknowledgehub__list list-textbox-card">
					{dataKnowledge?.length > 0 ? (
						dataKnowledge?.map((item: any, index: number) => <KnowledgeHubItem key={index} {...item} />)
					) : (
						<p>{lang == "vi" ? "Chưa tìm thấy dữ liệu" : "No data"}</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default UIKnowledge;
