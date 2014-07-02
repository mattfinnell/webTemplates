$(document).ready(function() {

	function scrollUpdates(){
		var parallax = $("#parallax1");
		if(parallaxRelativity(parallax) !== -1){
			setParallaxDelta(parallax, 2, .4); 
		}
	}

	function setParallaxDelta(parallax, velocity, offset){
		var delta = 100 - (parallaxRelativity(parallax) * velocity * 100 - offset * 100);
		parallax.css("background-position", "25% " +  delta + "%");
	}
	
	function parallaxRelativity(parallax){
		var windowTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		var parallaxTop = parallax.offset().top;
		var parallaxHeight = parallax.height();

		if(windowTop + windowHeight > parallaxTop && parallaxTop + parallaxHeight > windowTop)
			return 2 * ((windowTop + windowHeight) - parallaxTop) / ((parallaxTop + parallaxHeight) + windowHeight)
		return 0;
	}

	$(window).bind('scroll', function() { scrollUpdates() }); 
	$(window).resize( function() { scrollUpdates() });
});
