/* eslint-disable @typescript-eslint/no-use-before-define */
import { createContext, useCallback, useContext } from "react";

var Flickity = require("flickity");
export const MainJsContext = createContext<any>(null);

const MainJsProvider: React.FC<any> = ({ children }) => {
	const runSlider = (sliderWrap: any, sliderID: any) => {
		const slider = document.querySelector(sliderID);
		if (slider != null) {
			slider?.flickity({
				cellAlign: "left",
				draggable: ">1",
				contain: true,
				prevNextButtons: false,
				pageDots: false,
				on: {
					ready: function () {
						updateCurrentSlider(1);
					},
					change: function (index: any) {
						updateCurrentSlider(index + 1);
					},
				},
			});

			// CONTROLS
			let btnPrev = document.querySelector(sliderWrap + " .btn-control.--prev") as any,
				btnNext = document.querySelector(sliderWrap + " .btn-control.--next") as any;

			btnPrev.addEventListener("click", function () {
				slider?.flkty.previous(false, false);
			});
			btnNext.addEventListener("click", function () {
				slider?.flkty.next(false, false);
			});

			// PAGING
			function updateCurrentSlider(currentSlideIndex: any) {
				let currentPage = document.querySelector(sliderWrap + " .sliderpaging .current");
				if (currentPage != null) {
					currentPage.innerHTML = currentSlideIndex;
				}
			}
			let totalSlides = document.querySelector(sliderWrap + " .sliderpaging .total") as any;
			totalSlides.innerHTML = slider?.flkty.slides.length;
		}
	};

	return <MainJsContext.Provider value={{ runSlider }}>{children}</MainJsContext.Provider>;
};

export default MainJsProvider;

export const useJsMain = () => {
	const context = useContext(MainJsContext);
	if (!context) {
		// throw new Error("useMain has to be used within <MainContext.Provider>");
	}
	return context;
};
