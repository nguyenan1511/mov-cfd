/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { i18n } = require("./next-i18next.config");

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
};

module.exports = nextConfig;
