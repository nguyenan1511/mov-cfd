import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import ActivitiesList from "@/components/router/ActivitiesPage/ActivitiesList";
import LatestActFeatured from "@/components/router/ActivitiesPage/LatestActFeatured";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ActivitiesPage = ({ dataPage }: any) => {
	const { setLoadedData } = useStorage();

	const [loadingPage, setLoadingPage] = useState(true);

	const { getCategoryActivity } = useMainApi();

	const { data: dataCategory } = useQuery({
		queryFn: async () => {
			const res = await getCategoryActivity();
			if (res) {
				return res?.data?.activities;
			}
			return null;
		},
		queryKey: ["cateActivities"],
		staleTime: TIME_STALE, // 60 seconds
	});

	useEffect(() => {
		if (dataCategory?.length) {
			setLoadedData(true);
			setTimeout(() => {
				setLoadingPage(false);
			}, 500);
		}
	}, [dataCategory]);

	return (
		<div className={`duration-300 ${loadingPage ? "opacity-0" : "opacity-100"}`}>
			{dataCategory?.[0] && <LatestActFeatured dataCategory={dataCategory?.[0]} />}
			{dataCategory?.[1] && <ActivitiesList className="--pt" id="prevclass" dataCategory={dataCategory?.[1]} />}
			{dataCategory?.[2] && <ActivitiesList className="--ptb" id="otherclass" dataCategory={dataCategory?.[2]} />}
		</div>
	);
};

export default ActivitiesPage;
