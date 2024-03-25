import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const UICourseDetail = dynamic(() => import("@/components/router/UICourseDetail"), {
	ssr: false,
});

const activitiesDetailPage: NextPage = (props: any) => {
	const router = useRouter();

	const _metaData = {
		metaTitle: props?.dataDetail?.metaTitle?.[router.locale as any],
		metaDescription: props?.dataDetail?.metaDescription?.[router.locale as any],
		metaImage: props?.dataDetail?.metaImage,
	};

	return (
		<MasterPage meta={_metaData} classNameHeader="--white">
			<UICourseDetail dataPage={props?.dataDetail} />
		</MasterPage>
	);
};

export async function getServerSideProps({ query }: any) {
	let res = await ApiCall({
		path: `/api/v1/activities/${query?.slug}`,
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

export default activitiesDetailPage;
