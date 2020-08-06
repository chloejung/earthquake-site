// Overlay for mobile menu

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


// Collapsible 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}