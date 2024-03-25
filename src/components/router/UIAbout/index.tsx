import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import AboutContent from "@/components/router/UIAbout/AboutContent";
import HeroAbout from "@/components/router/UIAbout/HeroAbout";
import Volunteers from "@/components/router/UIAbout/Volunteers";
import CoreTeams from "@/components/router/UIHome/CoreTeams";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const UIAbout = ({ dataPage }: any) => {
	const { getDataTeam, getDataVolunteers } = useMainApi();

	const { setLoadedData } = useStorage();
	const router = useRouter();

	const { data: dataTeam } = useQuery({
		queryFn: async () => {
			const res = await getDataTeam();
			if (res) {
				return res?.data?.teams;
			}
			return null;
		},
		queryKey: ["teams"],
		staleTime: TIME_STALE, // 60 seconds
	});
	const { data: dataVolunteers } = useQuery({
		queryFn: async () => {
			const res = await getDataVolunteers();
			if (res) {
				return res?.data?.volunteers;
			}
			return null;
		},
		queryKey: ["volunteers"],
		staleTime: TIME_STALE, // 60 seconds
	});

	useEffect(() => {
		if (dataTeam?.length) {
			setLoadedData(true);
		}
	}, [router?.isReady, JSON.stringify(dataTeam)]);

	return (
		<>
			<HeroAbout dataPage={dataPage} />
			<AboutContent dataPage={dataPage} />
			<CoreTeams dataTeam={dataTeam} />
			<Volunteers dataVolunteers={dataVolunteers} />
		</>
	);
};

export default UIAbout;
