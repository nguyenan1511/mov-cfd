import MasterPage from "@/components/layouts/MasterPage";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const ActivitiesPage = dynamic(() => import("@/components/router/ActivitiesPage"), {
	ssr: false,
});

const activityPage: NextPage = (props: any) => {
	return (
		<MasterPage>
			<ActivitiesPage />
		</MasterPage>
	);
};
export default activityPage;
