/* eslint-disable class-methods-use-this */
import Document, { Html, Main, NextScript, Head } from "next/document";

import { AppConfig } from "@/modules/config/AppConfig";

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
