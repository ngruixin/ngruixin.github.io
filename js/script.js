$(document).ready(function(){
	// Prints message when HTML is ready
	console.log("Document is ready!");

	// Clicking the hide button hides the doge
	$("#hide-doge").click(function(){
		$("#bagel-doge").hide();
	});

	// Clicking the hide button shows the doge
	$("#show-doge").click(function(){
		$("#bagel-doge").show();
	});

	// Clicking the toggle button toggles the doge
	$("#toggle-doge").click(function(){
		$("#bagel-doge").toggle();
	});

	// Clicking the toggle button toggles the doge with fade animation
	$("#fade-doge").click(function(){
		$("#bagel-doge").fadeToggle(200);
	});

	// Clicking the grow button grows doge
	$("#grow-doge").click(function(){
		// Get current width of the image
		var width = $("#bagel-doge").width();
		// Increase the width by 20px
		$("#bagel-doge").css("width", width + 20);
	});
})

