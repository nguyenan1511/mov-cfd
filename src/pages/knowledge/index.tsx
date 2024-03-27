import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const UIKnowledge = dynamic(() => import("@/components/router/UIKnowledge"), {
	ssr: false,
});

const course: NextPage = (props: any) => {
	const router = useRouter();

	const _metaData = {
		metaTitle: props?.dataDetail?.data?.metaTitle?.[router.locale as any],
		metaDescription: props?.dataDetail?.data?.metaDescription?.[router.locale as any],
		metaImage: props?.dataDetail?.data?.metaImage,
	};

	return (
		<MasterPage meta={_metaData}>
			<UIKnowledge dataPage={props?.dataDetail} />
		</MasterPage>
	);
};

export async function getServerSideProps() {
	let res = await ApiCall({
		path: `/api/v1/pages/KNOWLEDGE`,
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

export default course;
