import { useEffect, useState } from "react";

export const Breakpoints = {
	xs: 0,
	sm: 600,
	md: 1024,
	lg: 1181,
	xl: 1600,
};

const BrowserSize = { width: 0, height: 0 };

const muteBrowser = (listener: any) => {
	if (typeof window !== "undefined") {
		// ("clean up", listener);
		window.removeEventListener("resize", listener);
	}
};

const listenBrowser = ({ exact = false, onChange }: any) => {
	// (exact);
	const onResize = () => {
		const orientation = window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait";

		let breakpoint = "";
		for (const [key, val] of Object.entries(Breakpoints)) {
			if (window.innerWidth > val) {
				breakpoint = key;
			}
		}

		let device = "desktop";
		if (window.innerWidth >= Breakpoints.lg) {
			device = "desktop";
		} else if (window.innerWidth < Breakpoints.sm) {
			device = "mobile";
		} else {
			device = "tablet";
		}

		BrowserSize.width = window.innerWidth;
		BrowserSize.height = window.innerHeight;

		if (onChange)
			onChange({
				orientation,
				breakpoint,
				device,
				size: BrowserSize,
			});
	};

	if (typeof window !== "undefined") {
		window.addEventListener("resize", onResize);
		onResize();
	}

	return onResize;
};

export const useNextBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState("lg");

	useEffect(() => {
		// listen for browser changed
		const resize = listenBrowser({ exact: false, onChange: (e: any) => setBreakpoint(e.breakpoint) });
		// unmount / clean up
		return () => muteBrowser(resize);
	}, []);

	return breakpoint;
};

export const useNextOrientation = (exact = false) => {
	const [orientation, setOrientation] = useState("desktop");

	useEffect(() => {
		// listen for browser changed
		const resize = listenBrowser({ exact, onChange: (e: any) => setOrientation(e.orientation) });
		// unmount / clean up
		return () => muteBrowser(resize);
	}, []);

	return orientation;
};

export const useNextDevice = (exact = false) => {
	const [device, setDevice] = useState("desktop");

	useEffect(() => {
		// listen for browser changed
		const resize = listenBrowser({ exact, onChange: (e: any) => setDevice(e.device) });
		// unmount / clean up
		return () => muteBrowser(resize);
	}, []);

	return device;
};

export const useNextBrowserSize = () => {
	const [size, setSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		// listen for browser changed
		const resize = listenBrowser({
			exact: false,
			onChange: (e: any) => {
				setSize(e.size);
			},
		});
		// unmount / clean up
		return () => muteBrowser(resize);
	}, []);

	return size;
};

export const useNextResponsive = (exact = false) => {
	const [browser, setBrowser] = useState({
		orientation: "landscape",
		breakpoint: "lg",
		device: "desktop",
		size: BrowserSize,
	});

	useEffect(() => {
		// listen for browser changed
		const resize = listenBrowser({ exact, onChange: (e: any) => setBrowser({ ...e }) });
		// unmount / clean up
		return () => muteBrowser(resize);
	}, []);

	return browser;
};
/**
 * @param  {Object} props
 * @param  {React.Component} props.desktop
 * @param  {React.Component} [props.tablet]
 * @param  {React.Component} [props.mobile]
 */
export const useNextLayout = ({ desktop, tablet, mobile }: any) => {
	const [layout, setLayout] = useState(desktop);
	const [device, setDevice] = useState("desktop");

	const update = () => {
		if (device === "mobile") {
			setLayout(mobile || tablet || desktop);
		} else if (device === "tablet") {
			setLayout(tablet || desktop);
		} else {
			setLayout(desktop);
		}
	};

	useEffect(() => {
		update();
		// ('mobile', mobile)
	}, [device]);

	useEffect(() => {
		// listen for browser changed
		const resize = listenBrowser({
			exact: false,
			onChange: (e: any) => {
				setDevice(e.device);
			},
		});
		// unmount / clean up
		return () => muteBrowser(resize);
	}, []);

	// useEffect(() => console.log("layout", layout), [layout]);

	return [layout, device];
};
