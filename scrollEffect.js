$(document).ready(function() {

	function fadeIn() {

		// Get the height of the window viewport
		var windowHeight = window.innerHeight;

		// Set the scroll top position
		var scrollTopPos = $(document).scrollTop();

		// Set the scroll bottom position	
		var scrollBottomPos = $(document).scrollTop() + windowHeight;

		// Set the trigger point for the animation
		var scrollBottomTrigger = scrollBottomPos - (windowHeight / 2);

		// Get the scroll positions of these unique elements
		var scrollPosSec1 = $('#section1').offset().top - 100;
		var scrollPosSec2 = $('#section2').offset().top - 100;
		var scrollPosSec3 = $('#section3').offset().top - 100;
		var scrollPosSec4 = $('#section4').offset().top - 100;

		// Trigger the animation for the first element
		if(scrollBottomTrigger >= scrollTopPos) {
			$('.container-section-1').addClass('animate');
		};

		// Trigger the animation for the second element
		if(scrollBottomTrigger >= scrollPosSec2) {
			$('.container-section-2').addClass('animate');
		};

		// Trigger the animation for the third element
		if(scrollBottomTrigger >= scrollPosSec3) {
			$('.container-section-3').addClass('animate');
		};

		// Trigger the animation for the third element
		if(scrollBottomTrigger >= scrollPosSec4) {
			$('.container-section-4').addClass('animate');
		};

	}

	// Run this function when the document is ready
	fadeIn();

	// Run this function when the user scrolls
	$(window).scroll(function() {
		fadeIn();
	});

});