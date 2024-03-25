/* eslint-disable import/extensions */

import ApiProvider from "@/components/context/ApiProvider";
import Compose from "@/components/context/compose/Compose";
import ListenerProvider from "@/components/context/ListenerProvider";
import MainApiProvider from "@/components/context/MainApiProvider";
import MainJsProvider from "@/components/context/MainJsProvider";
import MainProvider from "@/components/context/MainProvider";
import StorageProvider from "@/components/context/StorageProvider";

const Providers = (props: any) => {
	return (
		<Compose
			components={[ApiProvider, StorageProvider, MainProvider, ListenerProvider, MainApiProvider, MainJsProvider]}
			{...props}
		></Compose>
	);
};

export default Providers;
