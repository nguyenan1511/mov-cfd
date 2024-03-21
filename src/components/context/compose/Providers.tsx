/* eslint-disable import/extensions */

import Compose from "@/components/context/compose/Compose";
import ListenerProvider from "@/components/context/ListenerProvider";
import MainProvider from "@/components/context/MainProvider";
import StorageProvider from "@/components/context/StorageProvider";

const Providers = (props: any) => {
	return <Compose components={[MainProvider, ListenerProvider, StorageProvider]} {...props}></Compose>;
};

export default Providers;
