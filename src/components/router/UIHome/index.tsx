import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import CoreTeams from "@/components/router/UIHome/CoreTeams";
import HeroBanner from "@/components/router/UIHome/HeroBanner";
import { KnowledgeHub } from "@/components/router/UIHome/KnowledgeHub";
import LatestActivities from "@/components/router/UIHome/LatestActivities";
import ListCourseHome from "@/components/router/UIHome/ListCourseHome";
import OurPrograms from "@/components/router/UIHome/OurPrograms";
import Partners from "@/components/router/UIHome/Partners";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const UIHome = ({ dataPage }: any) => {
	const { getDataPartner, getListCourse, getDataTeam, getDataKnowledge, getDataActivity, dataProgram } = useMainApi();

	const { setLoadedData } = useStorage();

	const { data: dataPartner } = useQuery({
		queryFn: async () => {
			const res = await getDataPartner();
			if (res) {
				return res?.data?.partners;
			}
			return null;
		},
		queryKey: ["partner"],
		staleTime: TIME_STALE, // 60 seconds
	});

	const { data: dataCourse } = useQuery({
		queryFn: async () => {
			const res = await getListCourse("&isHomePage=true");
			if (res) {
				return res?.data?.courses;
			}
			return null;
		},
		queryKey: ["course"],
		staleTime: TIME_STALE, // 60 seconds
	});

	const { data: dataTeam } = useQuery({
		queryFn: async () => {
			const res = await getDataTeam("?orderBy=sortOrder&order=1");
			if (res) {
				return res?.data?.teams;
			}
			return null;
		},
		queryKey: ["teams"],
		staleTime: TIME_STALE, // 60 seconds
	});

	const { data: dataKnowledge } = useQuery({
		queryFn: async () => {
			const res = await getDataKnowledge("?page=1&limit=4&orderBy=sortOrder&order=1");
			if (res) {
				return res?.data?.knowledges;
			}
			return null;
		},
		queryKey: ["knowledge"],
		staleTime: TIME_STALE, // 60 seconds
	});

	const { data: dataActivity } = useQuery({
		queryFn: async () => {
			const res = await getDataActivity("?orderBy=sortOrder&order=1");
			if (res) {
				return res?.data?.activities;
			}
			return null;
		},
		queryKey: ["activity"],
		staleTime: TIME_STALE, // 60 seconds
	});

	useEffect(() => {
		if (dataCourse?.length && dataTeam?.length && dataActivity?.length) {
			setLoadedData(true);
		}
	}, [JSON.stringify(dataCourse), JSON.stringify(dataTeam), JSON.stringify(dataActivity)]);

	return (
		<>
			<HeroBanner dataPage={dataPage} />
			<Partners dataPartner={dataPartner} />
			<ListCourseHome dataCourse={dataCourse} />
			<OurPrograms dataProgram={dataProgram} />
			<CoreTeams dataTeam={dataTeam} />
			<KnowledgeHub dataKnowledge={dataKnowledge} />
			<LatestActivities dataActivity={dataActivity} />
		</>
	);
};

export default UIHome;
