document.querySelectorAll(".slider").forEach((slider) => {
	const slides = slider.querySelector(".slides");
	const slide = slider.querySelectorAll(".slide");
	let index = 0;
	let autoPlayInterval;

    const sliderInterval = parseInt(slider.dataset.sliderInterval) || 3000;

	const updateSlidePosition = () => {
		slides.style.transform = `translateX(-${index * 100}%)`;
	};

	const autoPlay = () => {
		index = (index + 1) % slide.length;
		updateSlidePosition();
	};

	slider.querySelector(".next").addEventListener("click", () => {
		index = (index + 1) % slide.length;
		updateSlidePosition();
		resetAutoPlay();
	});

	slider.querySelector(".prev").addEventListener("click", () => {
		index = (index - 1 + slide.length) % slide.length;
		updateSlidePosition();
		resetAutoPlay();
	});

	const resetAutoPlay = () => {
		clearInterval(autoPlayInterval);
		autoPlayInterval = setInterval(autoPlay, sliderInterval); // Change image every 3 seconds
	};

	autoPlayInterval = setInterval(autoPlay, sliderInterval);
});
