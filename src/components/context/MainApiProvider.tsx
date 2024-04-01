/* eslint-disable @typescript-eslint/no-use-before-define */
import { useApiProvider } from "@/components/context/ApiProvider";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

export const MainApiContext = createContext<any | null>(null);

interface Props {
	isPrivate?: boolean;
	children?: React.ReactNode;
}

const MainApiProvider: React.FC<Props> = ({ children }) => {
	const { GET, POST } = useApiProvider();

	const getListCourse = async (query?: any) => {
		return GET({
			path: `/api/v1/courses?orderBy=sortOrder&order=1${query ? query : ""}`,
		});
	};

	const getDataPage = async (page: string) => {
		return GET({
			path: `/api/v1/pages/${page}`,
		});
	};

	const getDataKnowledge = async (query: string) => {
		return GET({
			path: `/api/v1/knowledges${query}`,
		});
	};

	const getDataPartner = async () => {
		return GET({
			path: `/api/v1/partners`,
		});
	};

	const getDataTeam = async (query?: any) => {
		return GET({
			path: `/api/v1/teams${query ? query : ""}`,
		});
	};

	const getDataActivity = async (query?: any) => {
		return GET({
			path: `/api/v1/activities${query ? query : ""}`,
		});
	};

	const getCategoryActivity = async () => {
		return GET({
			path: `/api/v1/activity-categories?orderBy=sortOrder&order=1`,
		});
	};
	const getDataCategoryKnowledge = async () => {
		return GET({
			path: `/api/v1/knowledge-categories?orderBy=sortOrder&order=1`,
		});
	};

	const getDataVolunteers = async (query?: any) => {
		return GET({
			path: `/api/v1/volunteers${query ? query : ""}`,
		});
	};

	const getDataProgram = async (query?: any) => {
		return GET({
			path: `/api/v1/programs${query ? query : ""}`,
		});
	};

	const getDataCategoryCourse = async () => {
		return GET({
			path: `/api/v1/course-categories?orderBy=sortOrder&order=1`,
		});
	};

	const { data: dataProgram } = useQuery({
		queryFn: async () => {
			const res = await getDataCategoryCourse();
			if (res) {
				return res?.data?.activities;
			}
			return null;
		},
		queryKey: ["categoryCourses"],
		staleTime: TIME_STALE, // 60 seconds
	});

	return (
		<MainApiContext.Provider
			value={{
				getListCourse,
				getDataPage,
				getDataPartner,
				getDataTeam,
				getDataKnowledge,
				getDataActivity,
				getDataVolunteers,
				getCategoryActivity,
				getDataCategoryKnowledge,
				getDataProgram,
				getDataCategoryCourse,
				dataProgram,
			}}
		>
			{children}
		</MainApiContext.Provider>
	);
};

export default MainApiProvider;

export const useMainApi = () => {
	const context = useContext(MainApiContext);
	if (!context) {
		// throw new Error("useMain has to be used within <MainContext.Provider>");
	}
	return context;
};
