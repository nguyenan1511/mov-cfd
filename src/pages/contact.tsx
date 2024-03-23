// import { useRouter } from "next/router";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import { useRouter } from "next/router";

const ContactPage = dynamic(() => import("@/components/router/contact/ContactPage"), { ssr: false });

const contact: NextPage = (props: any) => {
	const router = useRouter();

	const _metaData = {
		metaTitle: props?.dataDetail?.metaTitle?.[router.locale as any],
		metaDescription: props?.dataDetail?.metaDescription?.[router.locale as any],
		metaImage: props?.dataDetail?.metaImage?.[router.locale as any],
	};
	return (
		<MasterPage meta={_metaData}>
			<ContactPage dataPage={props?.dataDetail} />
		</MasterPage>
	);
};

export async function getServerSideProps() {
	let res = await ApiCall({
		path: `/api/v1/pages/CONTACT`,
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

export default contact;
