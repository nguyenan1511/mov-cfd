import ActivitiesList from "@/components/router/ActivitiesPage/ActivitiesList";
import LatestActFeatured from "@/components/router/ActivitiesPage/LatestActFeatured";

const ActivitiesPage = ({ dataPage }: any) => {
	return (
		<>
			<LatestActFeatured />
			<ActivitiesList className="--pt" id="prevclass" />
			<ActivitiesList className="--ptb" id="otherclass" text="Other activities" />
		</>
	);
};

export default ActivitiesPage;
