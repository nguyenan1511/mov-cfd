import ActivitiesList from "@/components/router/ActivitiesPage/ActivitiesList";
import LatestActFeatured from "@/components/router/ActivitiesPage/LatestActFeatured";

const ActivitiesPage = ({ dataPage }: any) => {
	return (
		<>
			<LatestActFeatured />
			<ActivitiesList className="--pt" />
			<ActivitiesList className="--ptb" />
		</>
	);
};

export default ActivitiesPage;
