import "../styles/tailwind.scss";
import "../../public/dest/style.min.css";
import "../../public/dest/fonts.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;
