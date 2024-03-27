import type { ReactNode } from "react";
import { useRef, useState } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import useScroll from "@/plugins/hooks/useScroll";

interface IRootScroll {
	children?: ReactNode;
	classNameHeader?: string;
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
		<>
			<div className="topPage fixed top-0 left-0" id="topPage"></div>
			<Header classNameHeader={props?.classNameHeader} scrollTopPos={scrollTopPos} />
			<main className="main min-h-screen">{props.children}</main>
			<Footer />
		</>
	);
};

export default RootScroll;
