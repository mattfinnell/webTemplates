$(document).ready(function() {
	//Set the padding for most of the larger sections of content
	var navHeight = $("nav").height();
	$("header, footer,.tile , .content").css("padding-top", navHeight);

	//Global for Dimensions toggle
	var showDim = false;

	//Event handler for displaying stuff
	$("#dimensions").click(function() {
		var button = $("#dimensions");
		if(button.hasClass("active")) {
			button.removeClass("active");
		} else {
			button.addClass("active");
		}
		showDimensions(button.hasClass("active"));
	});

	function showDimensions (active) {
		if(active) {
			var innerTile 	= $(".tile").html() + 
							"<div class=\"dimension\"><h3> " + 
							$(".tile").width() + 
							" x " + 
							$(".tile").height() + 
							"</h3> </div>";

			var innerContent = $(".content").html() + 
							"<div class=\"dimension\"><h3> " + 
							$(".content").width() + 
							" x " + 
							$(".content").height() + 
							"</h3> </div>";

			$(".content").html(innerContent);
			$(".tile").html(innerTile);
		} else {
			$(".content").html("<h1> content </h1>");
			$(".tile").html("<h1> tile </h1>");
		}
	}
});
