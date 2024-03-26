import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Meta } from "@/components/layouts/Meta";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalStyle = dynamic(() => import("@/styles/GlobalStyle"), { ssr: false });
const Providers = dynamic(() => import("@/components/context/compose/Providers"), { ssr: false });
const RootScroll = dynamic(() => import("@/components/layouts/RootScroll"), { ssr: false });

interface IMETA {
	metaDescription?: string;
	metaTitle?: string;
	metaImage?: string;
}
type IMainProps = {
	isPrivate?: boolean;
	meta?: IMETA;
	children?: ReactNode;
	hideBooking?: boolean;
	className?: string;
	classNameHeader?: string;
};

const queryClient = new QueryClient();

const MasterPage = (props: IMainProps) => {
	const title = props.meta?.metaTitle || "";
	const description = props.meta?.metaDescription || "";
	const image = props.meta?.metaImage || "";

	return (
		<div id="wrapPage" className={props.className}>
			<Meta title={title} description={description} image={image} />
			<GlobalStyle />
			<QueryClientProvider client={queryClient}>
				<Providers {...props}>
					<RootScroll {...props}></RootScroll>
				</Providers>
			</QueryClientProvider>
		</div>
	);
};

export default MasterPage;
