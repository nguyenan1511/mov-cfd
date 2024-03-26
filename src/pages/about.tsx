import type { NextPage } from "next";
import dynamic from "next/dynamic";

import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import { useRouter } from "next/router";

const UIAbout = dynamic(() => import("@/components/router/UIAbout"), { ssr: false });

const About: NextPage = (props: any) => {
	const router = useRouter();

	const _metaData = {
		metaTitle: props?.dataDetail?.metaTitle?.[router.locale as any],
		metaDescription: props?.dataDetail?.metaDescription?.[router.locale as any],
		metaImage: props?.dataDetail?.metaImage,
	};

	return (
		<MasterPage meta={_metaData} className="aboutcontent">
			<UIAbout dataPage={props?.dataDetail?.data} />
		</MasterPage>
	);
};

export async function getServerSideProps() {
	let res = await ApiCall({
		path: `/api/v1/pages/ABOUT`,
	});

	let dataDetail = {};
	if (res.data) {
		dataDetail = res.data;
	}

	return {
		props: {
			dataDetail,
		},
	};
}

export default About;
