/* eslint-disable class-methods-use-this */
import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/modules/config/AppConfig";
import asset from "@/plugins/asset";

class MyDocument extends Document {
	render() {
		return (
			<Html lang={AppConfig.locale}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
