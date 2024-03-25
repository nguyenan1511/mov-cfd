import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

import { Meta } from "@/components/layouts/Meta";
import asset from "@/plugins/asset";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";

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
};

const queryClient = new QueryClient();

const MasterPage = (props: IMainProps) => {
	const router = useRouter();
	const title = props.meta?.metaTitle || "";
	const description = props.meta?.metaDescription || "";
	const image = props.meta?.metaImage || "";
	const [main, setMain] = useState<any>(<></>);
	const [main1, setMain1] = useState<any>(<></>);

	useEffect(() => {
		setMain(<script src={asset("/dest/jsmain.min.js")}></script>);
		setTimeout(() => {
			setMain1(<script src={asset("/dest/main.js")}></script>);
		}, 500);
	}, [router?.pathname]);

	return (
		<>
			<Head>{main}</Head>
			<Head>{main1}</Head>

			<div id="wrapPage">
				<Meta title={title} description={description} image={image} />
				<GlobalStyle />
				<QueryClientProvider client={queryClient}>
					<Providers {...props}>
						<RootScroll {...props}></RootScroll>
					</Providers>
				</QueryClientProvider>
			</div>
		</>
	);
};

export default MasterPage;
