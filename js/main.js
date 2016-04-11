window.onload = function() {

	function setTopImageWidth() {

		var topImage = document.getElementById('top-image');
		var topImageWidth = topImage.getBoundingClientRect().width;

		var heightToWidthRatio = 0.2;

		topImage.style.height = topImageWidth * heightToWidthRatio + "px";

	}

	function run() {

		setTopImageWidth();

	}

	run();

}