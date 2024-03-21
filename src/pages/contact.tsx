// import { useRouter } from "next/router";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import MasterPage from "@/components/layouts/MasterPage";

const ContactPage = dynamic(() => import("@/components/router/contact/ContactPage"), { ssr: false });

const contact: NextPage = (props: any) => {
	return (
		<MasterPage>
			<ContactPage />
		</MasterPage>
	);
};

export default contact;
