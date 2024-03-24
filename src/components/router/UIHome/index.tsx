import CoreTeams from "@/components/router/UIHome/CoreTeams";
import HeroBanner from "@/components/router/UIHome/HeroBanner";
import { KnowledgeHub } from "@/components/router/UIHome/KnowledgeHub";
import LatestActivities from "@/components/router/UIHome/LatestActivities";
import ListCourseHome from "@/components/router/UIHome/ListCourseHome";
import OurPrograms from "@/components/router/UIHome/OurPrograms";
import Partners from "@/components/router/UIHome/Partners";

const UIHome = () => {
	return (
		<>
			<HeroBanner />
			<Partners />
			<ListCourseHome />
			<OurPrograms />
			<CoreTeams />
			<KnowledgeHub />
			<LatestActivities />
		</>
	);
};

export default UIHome;
