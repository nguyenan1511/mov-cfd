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
				friction: 0.5,
				on: {
					ready: function () {
						updateCurrentSlider(1);
					},
					change: function (index) {
						updateCurrentSlider(index + 1);
					},
				},
			});

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
		}
	}

	sliderCoursesList(".slidercourses", "#slidercourses");
	sliderCoursesList(".coreteams", "#slidercoreteam");
	sliderCoursesList(".latestactivities", "#sliderlatest");
	sliderCoursesList(".prevclass", "#prevclass");
	sliderCoursesList(".otherclass", "#otherclass");
});
