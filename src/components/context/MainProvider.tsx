/* eslint-disable @typescript-eslint/no-use-before-define */
import { useStorage } from "@/components/context/StorageProvider";
import asset from "@/plugins/asset";
import Head from "next/head";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

// gsap.registerPlugin(ScrollTrigger);

type MainContextType = {};

export const MainContext = createContext<MainContextType | null>(null);
const imagesLoaded = require("imagesloaded");

interface Props {
	isPrivate?: boolean;
	children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [scriptSlider, setScriptSlider] = useState<any>();

	// const [scriptWow, setScriptWow] = useState<any>();

	const { loadedData } = useStorage();

	const router = useRouter();

	// // Function Animate
	// const initAnimation = () => {
	// 	let listFadeUp = gsap.utils.toArray(".fadeUp");
	// 	listFadeUp.forEach((l: any) => {
	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: l,
	// 				start: "top 95%",
	// 				scroller: ".root-scroll",
	// 			},
	// 		}).fromTo(
	// 			l,
	// 			{ y: 100, autoAlpha: 0, opacity: 0, duration: 0.5, stagger: 0.3 },
	// 			{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.5, stagger: 0.3 }
	// 		);
	// 	});
	// 	let listFadeIn = gsap.utils.toArray(".fadeIn");
	// 	listFadeIn.forEach((l: any) => {
	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: l,
	// 				start: "top 90%",
	// 				scroller: ".root-scroll",
	// 			},
	// 		}).fromTo(l, { autoAlpha: 0, opacity: 0, y: 200 }, { autoAlpha: 1, opacity: 1, y: 0 });
	// 	});

	// 	let listFadeLeft = gsap.utils.toArray(".fadeLeft");
	// 	listFadeLeft.forEach((l: any) => {
	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: l,
	// 				start: "top 80%",
	// 				scroller: ".root-scroll",
	// 			},
	// 		}).fromTo(l, { autoAlpha: 0, opacity: 0, x: 400 }, { autoAlpha: 1, opacity: 1, x: 0 });
	// 	});
	// 	let listFadeRight = gsap.utils.toArray(".fadeRight");
	// 	listFadeRight.forEach((l: any) => {
	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: l,
	// 				start: "top 80%",
	// 				scroller: ".root-scroll",
	// 			},
	// 		}).fromTo(l, { autoAlpha: 0, opacity: 0, x: -400 }, { autoAlpha: 1, opacity: 1, x: 0 });
	// 	});
	// 	ScrollTrigger.refresh();
	// };

	const handleLoad = () => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
		// setTimeout(() => {
		// 	initAnimation();
		// }, 3000);
	};

	useEffect(() => {
		handleLoad();
	}, []);

	// useEffect(() => {
	// 	if (!loading) {
	// 		setTimeout(() => {
	// 			setScriptWow(<script async src={asset("/dest/wow.js")}></script>);
	// 		}, 500);
	// 	}
	// }, [loading]);

	useEffect(() => {
		const myTimeout = setTimeout(() => {
			// const scrollToNew = document.getElementById("topPage");
			// if (scrollToNew) scrollToNew.scrollIntoView({ block: "start", behavior: "smooth" });
			window.scroll({ top: 0, left: 0, behavior: "smooth" });
		}, 100);
		return () => {
			clearTimeout(myTimeout);
		};
	}, [router?.asPath]);

	useEffect(() => {
		if (!router?.isReady) {
			return;
		}
		if (loadedData) {
			setTimeout(() => {
				setScriptSlider(<script async src={asset("/dest/main.js")}></script>);
			}, 500);
		}
	}, [router?.isReady, loadedData]);

	return (
		<MainContext.Provider value={{}}>
			<Head>{scriptSlider}</Head>
			{/* <Head>{scriptWow}</Head> */}
			<div className={`loading ${loading ? "" : "--hide"}`}></div>
			{children}
			<style jsx>
				{`
					.loading {
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						position: fixed;
						background: #fff;
						z-index: 900;
						opacity: 1;
						visibility: visible;
						transition: 0.3s;
						-webkit-transition: 0.3s;
					}

					.loading.--hide {
						opacity: 0;
						visibility: hidden;
						transition: 0.3s;
						-webkit-transition: 0.3s;
					}
				`}
			</style>
		</MainContext.Provider>
	);
};

export default MainProvider;

export const useMain = () => {
	const context = useContext(MainContext);
	if (!context) {
		// throw new Error("useMain has to be used within <MainContext.Provider>");
	}
	return context;
};
