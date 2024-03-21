/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const transpilePackages = [];

const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n,
	eslint: {
		dirs: ["*"],
	},
	publicRuntimeConfig: {
		version,
	},
	poweredByHeader: false,
	trailingSlash: true,
	basePath: "",

	reactStrictMode: false,
	output: "standalone",

	transpilePackages,

	webpack(config, { dev, isServer }) {
		config.module.rules.push({
			test: /\.svg$/i,
			exclude: [path.resolve("node_modules")],
			use: [
				{
					loader: "raw-loader",
					options: {
						esModule: false,
					},
				},
			],
		});

		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);
