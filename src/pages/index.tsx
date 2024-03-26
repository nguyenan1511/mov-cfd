import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const UIHome = dynamic(() => import("@/components/router/UIHome"), {
	ssr: false,
});

const Home: NextPage = (props: any) => {
	const router = useRouter();

	const _metaData = {
		metaTitle: props?.dataDetail?.metaTitle?.[router.locale as any],
		metaDescription: props?.dataDetail?.metaDescription?.[router.locale as any],
		metaImage: props?.dataDetail?.metaImage,
	};

	return (
		<MasterPage className="homepage" meta={_metaData}>
			<UIHome dataPage={props?.dataDetail?.data} />
		</MasterPage>
	);
};

export async function getServerSideProps() {
	let res = await ApiCall({
		path: `/api/v1/pages/HOME`,
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

export default Home;
