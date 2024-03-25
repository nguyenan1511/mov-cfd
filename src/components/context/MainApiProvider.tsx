/* eslint-disable @typescript-eslint/no-use-before-define */
import { useApiProvider } from "@/components/context/ApiProvider";
import { createContext, useContext } from "react";

export const MainApiContext = createContext<any | null>(null);

interface Props {
	isPrivate?: boolean;
	children?: React.ReactNode;
}

const MainApiProvider: React.FC<Props> = ({ children }) => {
	const { GET, POST } = useApiProvider();

	const getListCourse = async () => {
		return GET({
			path: `/api/v1/courses`,
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

	const getDataTeam = async () => {
		return GET({
			path: `/api/v1/teams`,
		});
	};

	const getDataActivity = async (query?: any) => {
		return GET({
			path: `/api/v1/activities${query ? query : ""}`,
		});
	};
	const getDataVolunteers = async (query?: any) => {
		return GET({
			path: `/api/v1/volunteers${query ? query : ""}`,
		});
	};

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
