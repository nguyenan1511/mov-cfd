/* eslint-disable @typescript-eslint/no-use-before-define */
import { useStorage } from "@/components/context/StorageProvider";
import asset from "@/plugins/asset";
import { animated, useSpring } from "@react-spring/web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

type MainContextType = {};

export const MainContext = createContext<MainContextType | null>(null);
const imagesLoaded = require("imagesloaded");

interface Props {
	isPrivate?: boolean;
	children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children }) => {
	const [stylesLoading, setStylesLoading] = useSpring(() => ({
		from: { opacity: 1, zIndex: 99999 },
	}));

	const [scriptSlider, setScriptSlider] = useState<any>();

	const { loadedData } = useStorage();

	const router = useRouter();

	// Function Animate
	const initAnimation = () => {
		let listFadeUp = gsap.utils.toArray(".fadeUp");
		listFadeUp.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: "top 95%",
					scroller: ".root-scroll",
				},
			}).fromTo(
				l,
				{ y: 100, autoAlpha: 0, opacity: 0, duration: 0.5, stagger: 0.3 },
				{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.5, stagger: 0.3 }
			);
		});
		let listFadeIn = gsap.utils.toArray(".fadeIn");
		listFadeIn.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: "top 90%",
					scroller: ".root-scroll",
				},
			}).fromTo(l, { autoAlpha: 0, opacity: 0, y: 200 }, { autoAlpha: 1, opacity: 1, y: 0 });
		});

		let listFadeLeft = gsap.utils.toArray(".fadeLeft");
		listFadeLeft.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: "top 80%",
					scroller: ".root-scroll",
				},
			}).fromTo(l, { autoAlpha: 0, opacity: 0, x: 400 }, { autoAlpha: 1, opacity: 1, x: 0 });
		});
		let listFadeRight = gsap.utils.toArray(".fadeRight");
		listFadeRight.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: "top 80%",
					scroller: ".root-scroll",
				},
			}).fromTo(l, { autoAlpha: 0, opacity: 0, x: -400 }, { autoAlpha: 1, opacity: 1, x: 0 });
		});
		ScrollTrigger.refresh();
	};

	const handleLoad = () => {
		setTimeout(() => {
			setStylesLoading.start({
				from: {
					opacity: 1,
					zIndex: 13,
				},
				to: {
					opacity: 0,
					zIndex: -1,
				},
			});
		}, 1500);
		setTimeout(() => {
			initAnimation();
		}, 3000);
	};

	useEffect(() => {
		imagesLoaded(".root", function () {
			// images have loaded
			handleLoad();
		});
	}, []);

	useEffect(() => {
		const scrollTo = document.getElementById("UIProductsDetail");
		const scrollToNew = document.getElementById("newDetail");
		if (scrollToNew) scrollToNew.scrollIntoView({ block: "start", behavior: "smooth" });
		if (scrollTo) scrollTo.scrollIntoView({ block: "start", behavior: "smooth" });
	}, [router.asPath]);

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
			{/* <animated.div
				style={stylesLoading}
				className={`loadingPage flexCenter fixed inset-0 z-[999] h-screen w-screen bg-[#e0f6f6]`}
			>
				<div className="loader relative">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</animated.div> */}
			{children}
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
