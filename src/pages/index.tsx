import type { NextPage } from "next";
import dynamic from "next/dynamic";
import MasterPage from "@/components/layouts/MasterPage";
import ApiCall from "@/plugins/api-call/ApiCall";
import { useRouter } from "next/router";

const UIHome = dynamic(() => import("@/components/router/UIHome"), {
  ssr: false,
});

const Home: NextPage = (props: any) => {
  const router = useRouter();

  return (
    <MasterPage
      meta={{
        metaTitle:
          router?.locale === "vi"
            ? props?.dataDetail?.data?.vi?.metaTitle
            : props?.dataDetail?.data?.en?.metaTitle,
        metaDescription:
          router?.locale === "vi"
            ? props?.dataDetail?.data?.vi?.metaDescription
            : props?.dataDetail?.data?.en?.metaDescription,
        metaImage:
          router?.locale === "vi"
            ? props?.dataDetail?.data?.vi?.metaImage
            : props?.dataDetail?.data?.en?.metaImage,
      }}
    >
      <UIHome />
    </MasterPage>
  );
};

// export async function getServerSideProps() {
//   let res = await ApiCall({
//     path: `/api/v1/pages/HOME`,
//   });

//   let dataDetail = {};
//   if (res.data) {
//     dataDetail = res.data;
//   }

//   return {
//     props: {
//       dataDetail,
//     },
//   };
// }

export default Home;
