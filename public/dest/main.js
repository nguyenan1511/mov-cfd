$(document).ready(function () {
	function sliderCoursesList(sliderWrap, sliderID) {
		const slider = document.querySelector(sliderID);
		if (slider != null) {
			let flkty = new Flickity(slider, {
				cellAlign: "left",
				draggable: ">1",
				contain: true,
				prevNextButtons: false,
				pageDots: false,
				on: {
					ready: function () {
						updateCurrentSlider(1);
						setHeightSlides();
					},
					change: function (index) {
						updateCurrentSlider(index + 1);
					},
				},
			});

			// SET HEIGHT SLIDES
			function setHeightSlides() {
				let sliderList = document.querySelectorAll(sliderWrap);
				maxHeight = 0;
				for (let slider of sliderList) {
					let slides = slider.querySelectorAll(".flickity-slider > div");
					for (let slide of slides) {
						slide.style.height = `auto`;
						if (slide.offsetHeight > maxHeight) {
							maxHeight = slide.offsetHeight;
						}
					}
					for (let slide of slides) {
						slide.style.height = `${maxHeight}px`;
					}
				}
			}

			// CONTROLS
			let btnPrev = document.querySelector(sliderWrap + " .btn-control.--prev"),
				btnNext = document.querySelector(sliderWrap + " .btn-control.--next");

			btnPrev.addEventListener("click", function () {
				flkty.previous(false, false);
			});
			btnNext.addEventListener("click", function () {
				flkty.next(false, false);
			});

			// PAGING
			function updateCurrentSlider(currentSlideIndex) {
				let currentPage = document.querySelector(sliderWrap + " .sliderpaging .current");
				if (currentPage != null) {
					currentPage.innerHTML = currentSlideIndex;
				}
			}
			let totalSlides = document.querySelector(sliderWrap + " .sliderpaging .total");
			totalSlides.innerHTML = flkty.slides.length;

			window.addEventListener("resize", function () {
				setTimeout(function () {
					setHeightSlides();
				}, 50);
			});
		}
	}

	function setFullHeightMobile() {
		document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
	}

	window.addEventListener("resize", function () {
		setFullHeightMobile();
	});

	sliderCoursesList(".slidercourses", "#slidercourses");
	sliderCoursesList(".coreteams", "#slidercoreteam");
	sliderCoursesList(".latestactivities", "#sliderlatest");
	sliderCoursesList(".prevclass", "#prevclass");
	sliderCoursesList(".otherclass", "#otherclass");
	setFullHeightMobile();
});
