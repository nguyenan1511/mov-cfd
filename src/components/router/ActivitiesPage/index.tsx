import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import ActivitiesList from "@/components/router/ActivitiesPage/ActivitiesList";
import LatestActFeatured from "@/components/router/ActivitiesPage/LatestActFeatured";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ActivitiesPage = ({ dataPage }: any) => {
	const { setLoadedData } = useStorage();

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
		}
	}, [dataCategory]);

	return (
		dataCategory?.length > 0 && (
			<>
				{dataCategory?.[0] && <LatestActFeatured dataCategory={dataCategory?.[0]} />}
				{dataCategory?.[1] && (
					<ActivitiesList className="--pt" id="prevclass" dataCategory={dataCategory?.[1]} />
				)}
				{dataCategory?.[2] && (
					<ActivitiesList className="--ptb" id="otherclass" dataCategory={dataCategory?.[2]} />
				)}
			</>
		)
	);
};

export default ActivitiesPage;
