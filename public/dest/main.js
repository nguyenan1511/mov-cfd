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
				let sliderList = document.querySelectorAll(sliderWrap),
					maxHeight = 0;
				for (const slider of sliderList) {
					let slides = slider.querySelectorAll(".flickity-slider > div");
					for (const slide of slides) {
						if (slide.offsetHeight > maxHeight) {
							maxHeight = slide.offsetHeight;
							slide.style.height = `${maxHeight}px`;
						}
					}
					for (const slide of slides) {
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
				console.log(1);
				setTimeout(() => {
					setHeightSlides();
				}, 100);
			});
		}
	}

	function setFullHeightMobile() {
		document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
	}
	// function mouseMoveParallax() {
	// 	const elems = document.querySelectorAll(".hero .parallax");
	// 	function parallax(e) {
	// 		elems.forEach(function (elem) {
	// 			let speed = elem.getAttribute("data-speed");
	// 			let x = (e.clientX * speed) / 80;
	// 			let y = (e.clientY * speed) / 80;
	// 			if (window.innerWidth >= 767) {
	// 				elem.style.transform = `translate(${x}px, ${y}px)`;
	// 			} else {
	// 				elem.style.transform = `initial`;
	// 			}
	// 		});
	// 	}
	// 	if (window.innerWidth >= 767) {
	// 		document.addEventListener("mousemove", parallax);
	// 	}
	// }

	window.addEventListener("resize", function () {
		setFullHeightMobile();
		// mouseMoveParallax();
	});

	sliderCoursesList(".slidercourses", "#slidercourses");
	sliderCoursesList(".coreteams", "#slidercoreteam");
	sliderCoursesList(".latestactivities", "#sliderlatest");
	sliderCoursesList(".prevclass", "#prevclass");
	sliderCoursesList(".otherclass", "#otherclass");
	setFullHeightMobile();
});
