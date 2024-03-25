import { useRouter } from "next/router";
import { createContext, memo, useContext, useEffect, useState } from "react";

interface IContext {
	isLoading: boolean;
	setIsLoading: (props: any) => void;
	isShowSearch: boolean;
	setIsShowSearch: (props: any) => void;
	lang: string;
	loadedData: boolean;
	setLang: (props: any) => void;
	setLoadedData: (props: any) => void;
}

export const StorageContext = createContext<IContext | null>(null);

const StorageProvider = (props: any) => {
	//

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const [loadedData, setLoadedData] = useState<any>(false);

	const [isShowSearch, setIsShowSearch] = useState(false);
	const [lang, setLang] = useState("vi");

	useEffect(() => {
		if (!router.isReady) {
			return;
		}
		setLang(router.locale == "vi" ? "vi" : "en");
	}, [router.isReady]);

	return (
		<StorageContext.Provider
			value={{
				isLoading,
				setIsLoading,
				isShowSearch,
				setIsShowSearch,
				lang,
				setLang,
				loadedData,
				setLoadedData,
			}}
			{...props}
		></StorageContext.Provider>
	);
};

export default memo(StorageProvider);

export const useStorage = () => {
	const context = useContext(StorageContext);
	if (!context) {
		throw new Error("useStorage has to be used within <StorageContext.Provider>");
	}
	return context;
};
