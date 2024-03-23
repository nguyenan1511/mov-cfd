/* eslint-disable import/extensions */

import ApiProvider from "@/components/context/ApiProvider";
import Compose from "@/components/context/compose/Compose";
import ListenerProvider from "@/components/context/ListenerProvider";
import MainApiProvider from "@/components/context/MainApiProvider";
import MainProvider from "@/components/context/MainProvider";
import StorageProvider from "@/components/context/StorageProvider";

const Providers = (props: any) => {
	return (
		<Compose
			components={[MainProvider, ListenerProvider, StorageProvider, ApiProvider, MainApiProvider]}
			{...props}
		></Compose>
	);
};

export default Providers;
