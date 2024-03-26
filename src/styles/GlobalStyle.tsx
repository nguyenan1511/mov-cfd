// eslint-disable-next-line import/no-extraneous-dependencies
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import asset from "@/plugins/asset";

const GlobalStyle = () => {
	return (
		<style jsx global>{`

			@mixin customscroll($width: 0, $bgTrack: transparent, $bgThumb: #41ada0) {
				&::-webkit-scrollbar {
					width: $width;
					@media (max-width: 767.98px) {
						width: 0;
					}
				}
				&::-webkit-scrollbar-track {
					background: $bgTrack;
				}
				&::-webkit-scrollbar-thumb {
					background: $bgThumb;
					border-radius: 20px;
				}
			}
			html {
				font-size: 62.5%;
			}
			html,
			body {
				linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 247, 232, 1) 100%);
				height: 100dvh;
				overflow-x: hidden;
			}
			body {
				//overflow-y: auto;
			}

			.root {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100dvh;
				display: flex;
				flex-direction: column;
				flex-shrink: 0;
				padding: 0px;
			}

			.root-scroll {
				width: 100%;
				height: 100dvh;
				overflow-y: initial;
				@include customscroll();
			}

			#__next {
				overflow-x: hidden;
				min-height: 100vh;
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

			//Arrow
			.arrow {
				background-image: url(${asset("/assets/bg-dots.svg")});
				background-size: 100% 100%;
				filter: drop-shadow(0px 0px 10px rgba(49, 159, 214, 0.1));
				&:hover,
				&.active {
					background-image: url(${asset("/assets/bg-dots-active.svg")});
					color: white;
				}
			}

			.tabTitle {
				filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
			}

			//Keyfram Button
			@keyframes greentopBubbles {
				0% {
					background-position:
						5% 90%,
						10% 90%,
						10% 90%,
						15% 90%,
						25% 90%,
						25% 90%,
						40% 90%,
						55% 90%,
						70% 90%;
				}

				50% {
					background-position:
						0% 80%,
						0% 20%,
						10% 40%,
						20% 0%,
						30% 30%,
						22% 50%,
						50% 50%,
						65% 20%,
						90% 30%;
				}

				100% {
					background-position:
						0% 70%,
						0% 10%,
						10% 30%,
						20% -10%,
						30% 20%,
						22% 40%,
						50% 40%,
						65% 10%,
						90% 20%;
					background-size:
						0% 0%,
						0% 0%,
						0% 0%,
						0% 0%,
						0% 0%,
						0% 0%;
				}
			}

			.errors {
				margin-top: 5px;
			}

			.ant-modal .ant-modal-body {
				font-family: "Barlow Condensed", "sans-serif";
			}

			//Loading

			.loadingPage {
				.logo {
					animation: opacityAnimation 1.5s ease-in-out infinite;
				}
			}
			.loader {
				position: absolute;
				top: 50%;
				left: 50%;
				border-radius: 50%;
				height: 146px;
				width: 146px;
				animation: rotate_3922 1.2s linear infinite;
				background-color: #9b59b6;
				background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
			}

			.loader span {
				position: absolute;
				border-radius: 50%;
				height: 100%;
				width: 100%;
				background-color: #9b59b6;
				background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
			}

			.loader span:nth-of-type(1) {
				filter: blur(5px);
			}

			.loader span:nth-of-type(2) {
				filter: blur(10px);
			}

			.loader span:nth-of-type(3) {
				filter: blur(25px);
			}

			.loader span:nth-of-type(4) {
				filter: blur(50px);
			}

			.loader::after {
				content: "";
				position: absolute;
				top: 10px;
				left: 10px;
				right: 10px;
				bottom: 10px;
				background-color: #e6f9f6;
				border: solid 5px #ffffff;
				border-radius: 50%;
			}

			@keyframes rotate_3922 {
				from {
					transform: translate(-50%, -50%) rotate(0deg);
				}

				to {
					transform: translate(-50%, -50%) rotate(360deg);
				}
			}
			@keyframes marquee {
				0% {
					transform: translateX(0);
				}
				100% {
					transform: translateX(-100vw);
				}
			}
			@keyframes marqueeMb {
				0% {
					transform: translateX(0);
				}
				100% {
					transform: translateX(-1440px);
				}
			}
			@keyframes bounce {
				0%,
				20%,
				50%,
				80%,
				100% {
					transform: translateY(0);
				}
				40% {
					transform: translateY(-30px);
				}
				60% {
					transform: translateY(-15px);
				}
			}
			@keyframes opacityAnimation {
				0% {
					opacity: 1;
				}
				50% {
					opacity: 0.1;
				}
				100% {
					opacity: 1;
				}
			}
			.fadeUp,
			.fadeIn,
			.fadeLeft,
			.fadeRight {
				opacity: 0;
			}
			.imgMain {
				@media (max-width: 767px) {
					aspect-ratio: unset !important;
				}
			}
			// custom paing
			.page {
				.ant-pagination {
					display: flex !important;
					li {
						width: 50px;
						height: 50px;
						border: none;
						color: white;
						background-color: transparent;
						&:hover {
							background-color: transparent !important;
						}
						&.ant-pagination-item-active {
							.itemPage {
								background-image: url(${asset("/assets/bg-dots-active.svg")});
							}
						}
						&.ant-pagination-disabled {
							opacity: 0.5;
						}
						@media (max-width: 767px) {
							width: 26px;
							height: 26px;
						}
					}
				}
			}

			.textbox-card {
				&:hover {
					&:after {
						background-image: url("/img/card-bg.svg");
					}
				}
			}
			.card__info .heading{
				display: -webkit-box !important;
			}

			.contentbox{
				.heading{
					&:after {
						background-image: url("/img/about-shape-mission.svg") !important;
					}
				}
			}
		`}</style>
	);
};

export default GlobalStyle;
