// Overlay

$(document).ready(function() {
		$(".nav-icon").click(function(){ 
			$(".overlay").fadeToggle(200);
			$(this).toggleClass('btn-open').toggleClass('btn-close');
		});
	});


	// Talk to overlay with a fadeToggle

	$(".overlay").on('click', function() {
		$(".overlay").fadeToggle(200);
		$(".nav-icon a").toggleClass('btn-open').toggleClass('btn-close');
		open = false; // tracking variable to see if its on or off (hiding overlay)
	});