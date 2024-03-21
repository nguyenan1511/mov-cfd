/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			gilroy: ["GilroyBold"],
			gilroyLight: ["GilroyLight"],
			roboto: ["Roboto Condensed"],
			GilroyR: ["GilroyR"],
		},
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				main: "#1E3888",
				red: "#FF5423",
				gray: "#B3B3B3",
				green: "#84E6D3",
			},
			screens: {
				_lg: { max: "1440px" },
				_lgs: { max: "1366px" },
				_md: { max: "1199.98px" },
				_sm: { max: "991.98px" },
				_xs: { max: "767.98px" },
				_xxs: { max: "575.98px" },
				_mbs: { max: "375px" },
				desLg: { min: "1660px" },
			},
		},
	},
	daisyui: {
		themes: ["light", "black"],
	},
	plugins: [require("daisyui"), require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio")],
};
