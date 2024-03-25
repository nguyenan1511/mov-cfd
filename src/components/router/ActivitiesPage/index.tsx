import { useStorage } from "@/components/context/StorageProvider";
import ActivitiesList from "@/components/router/ActivitiesPage/ActivitiesList";
import LatestActFeatured from "@/components/router/ActivitiesPage/LatestActFeatured";
import { useEffect } from "react";

const ActivitiesPage = ({ dataPage }: any) => {
	const { setLoadedData } = useStorage();
	useEffect(() => {
		setLoadedData(true);
	}, []);
	return (
		<>
			<LatestActFeatured />
			<ActivitiesList className="--pt" id="prevclass" />
			<ActivitiesList className="--ptb" id="otherclass" text="Other activities" />
		</>
	);
};

export default ActivitiesPage;
