import type { ReactNode } from "react";
import { useRef, useState } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import useScroll from "@/plugins/hooks/useScroll";

interface IRootScroll {
	children?: ReactNode;
	hideHeader?: boolean;
	hideFooter?: boolean;
	hideBooking?: boolean;
}

const RootScroll = (props: IRootScroll) => {
	const eleScroll = useRef<any>(null);
	const [scrollTopPos, setScrollTopPos] = useState<number>(0);

	useScroll({
		ref: eleScroll,
		onChange: (scrollTop, scrollLeft) => {
			setScrollTopPos(scrollTop);
		},
	});

	return (
		<div className="root">
			<div ref={eleScroll} className="root-scroll">
				<div className="topPage" id="topPage"></div>
				<Header />
				<main className="main min-h-screen">{props.children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default RootScroll;
