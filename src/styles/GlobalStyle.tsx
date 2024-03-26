// eslint-disable-next-line import/no-extraneous-dependencies
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import asset from "@/plugins/asset";

const GlobalStyle = () => {
	return (
		<style jsx global>{`
			// @mixin customscroll($width: 1px, $bgTrack: #f5ead4, $bgThumb: #41ada0) {
			// 	&::-webkit-scrollbar {
			// 		width: $width;
			// 		@media (max-width: 767.98px) {
			// 			width: 0;
			// 		}
			// 	}
			// 	&::-webkit-scrollbar-track {
			// 		background: $bgTrack;
			// 	}
			// 	&::-webkit-scrollbar-thumb {
			// 		background: $bgThumb;
			// 		border-radius: 20px;
			// 	}
			// }
			// html {
			// 	font-size: 62.5%;
			// }
			// html,
			// body {
			// 	background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 247, 232, 1) 100%);
			// 	height: 100dvh;
			// 	overflow-x: hidden;
			// }
			// body,
			// html,
			// .hideScrollbar {
			// 	-ms-overflow-style: none;
			// 	scrollbar-width: none;
			// 	&::-webkit-scrollbar {
			// 		display: none;
			// 	}
			// }

			// .root {
			// 	position: absolute;
			// 	top: 0;
			// 	width: 100%;
			// 	height: 100dvh;
			// 	display: flex;
			// 	flex-direction: column;
			// 	flex-shrink: 0;
			// 	padding: 0px;
			// }

			// .root-scroll {
			// 	width: 100%;
			// 	height: 100dvh;
			// 	overflow-y: initial;
			// 	@include customscroll();
			// }

			// #__next {
			// 	overflow-x: hidden;
			// 	min-height: 100vh;
			// }
			html,
			body,
			.hideScrollbar {
				height: auto;
				-ms-overflow-style: none;
				scrollbar-width: none;
				&::-webkit-scrollbar {
					display: none;
				}
			}

			* {
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
			}
			h1,
			h2,
			h3,
			h4,
			h5 {
				padding: 0;
				margin: 0;
				font-weight: normal;
			}

			p {
				padding: 0;
				margin: 0;
			}

			ul,
			li {
				padding: 0;
				margin: 0;
				list-style-type: none;
				padding-inline-start: 0px;
				margin-block-start: 0;
				margin-block-end: 0;
				line-height: 1;
			}

			ol li,
			ul li {
				line-height: 1.5em;
			}

			hr {
				border-top: 1px solid #dadada;
			}

			a,
			a:hover,
			a:active {
				text-decoration: none;
			}

			img {
				max-width: 100%;
				display: block;
			}

			select {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				border: 0;
				background: none;
			}

			pre {
				margin-bottom: 0;
			}
			code.hljs {
				padding: 0.8rem;
			}

			/* Chrome, Safari, Edge, Opera */
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
			// Auto Complete input

			/* Change the white to any color */
			input:-webkit-autofill,
			input:-webkit-autofill:hover,
			input:-webkit-autofill:focus,
			input:-webkit-autofill:active {
				-webkit-box-shadow: 0 0 0 30px #fff inset !important;
			}
			/*Change text in autofill textbox*/
			input:-webkit-autofill {
				-webkit-text-fill-color: #000 !important;
			}

			/* Firefox */
			input[type="number"] {
				-moz-appearance: textfield;
			}

			.errors {
				margin-top: 5px;
			}

			.textbox-card {
				&:hover {
					&:after {
						background-image: url("/img/card-bg.svg");
					}
				}
			}
			.card__info .heading {
				display: -webkit-box !important;
			}

			.contentbox {
				.heading {
					&:after {
						background-image: url("/img/about-shape-mission.svg") !important;
					}
					&.--last {
						&:after {
							background-image: url("/img/about-shape-vision.svg") !important;
						}
					}
				}
			}
		`}</style>
	);
};

export default GlobalStyle;
