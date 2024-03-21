import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Meta } from "@/components/layouts/Meta";

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

const MasterPage = (props: IMainProps) => {
	const title = props.meta?.metaTitle || "";
	const description = props.meta?.metaDescription || "";
	const image = props.meta?.metaImage || "";

	return (
		<div id="wrapPage">
			<Meta title={title} description={description} image={image} />
			<GlobalStyle />
			<Providers {...props}>
				<RootScroll {...props}></RootScroll>
			</Providers>
		</div>
	);
};

export default MasterPage;
