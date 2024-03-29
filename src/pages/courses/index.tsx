import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const UICourse = dynamic(() => import("@/components/router/UICourse"), {
	ssr: false,
});

const course: NextPage = (props: any) => {
	const router = useRouter();

	const _metaData = {
		metaTitle: props?.dataDetail?.metaTitle?.[router.locale as any],
		metaDescription: props?.dataDetail?.metaDescription?.[router.locale as any],
		metaImage: props?.dataDetail?.metaImage,
	};

	return (
		<MasterPage meta={_metaData} className="coursespage">
			<UICourse
				dataCategory={props?.dataDetail?.dataCategoryList?.activities?.find(
					(it: any) => it?.id === router?.query?.category
				)}
				listCourse={props?.dataDetail?.listCourse}
			/>
		</MasterPage>
	);
};

export async function getServerSideProps({ query }: any) {
	let res = await ApiCall({
		path: `/api/v1/pages/COURSE`,
	});

	let dataCategoryList = await ApiCall({
		path: `/api/v1/course-categories?orderBy=sortOrder&order=1`,
	});
	let listCourse = await ApiCall({
		path: `/api/v1/courses?category=${query?.category}`,
	});

	let dataDetail = {} as any;
	if (res.data) {
		dataDetail = res.data;
	}
	if (dataCategoryList?.data) {
		dataDetail.dataCategoryList = dataCategoryList?.data;
	}
	if (listCourse?.data) {
		dataDetail.listCourse = listCourse?.data;
	}

	return {
		props: {
			dataDetail,
		},
	};
}

export default course;
