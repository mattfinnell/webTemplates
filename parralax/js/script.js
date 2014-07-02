$(document).ready(function() {

	/* Driving function that calls our parallax functionalities */
	function scrollUpdates(){
		var p1 = $("#parallax1");
		var p2 = $("#parallax2");

		if(parallaxRelativity(p1) > 0 ){
			setParallaxDelta(p1, 15, 0); 
		}

		if(parallaxRelativity(p2) > 0){
			setParallaxDelta(p2, 2, 0); 
		}
	}

	/* setParallaxDelta 
	 *	Params
	 *		parallax	DOM object meant to be edited
	 *		velocity  	rate at which the background shifts (via percentage);
	 *		offset		vertical image shift		
	 *
	 * will set the background shift respectively to the parallaxRelativity. 
	 * essentially sets the CSS to do what we want. 
	 */
	function setParallaxDelta(parallax, velocity, offset){
		var delta = 100 - (parallaxRelativity(parallax) * velocity * 100 - offset * 100);
		parallax.css("background-position", "25% " +  delta + "%");
	}
	
	/* parallaxRelativity
	 *	Params
	 *		parallax	DOM object meant to be considered
	 *
	 * will calculate how much the screen has consumed the parallax
	 * element. in percentage. Anything thing beyond will be accounted 
	 * for as 0%
	 */
	function parallaxRelativity(parallax){
		var windowTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		var parallaxTop = parallax.offset().top;
		var parallaxHeight = parallax.height();

		if(windowTop + windowHeight > parallaxTop && parallaxTop + parallaxHeight > windowTop)
			return 2 * ((windowTop + windowHeight) - parallaxTop) / ((parallaxTop + parallaxHeight) + windowHeight)
		return 0;
	}

	/* Make sure that the page will always update via scrolling or window resizing */
	$(window).bind('scroll', function() { scrollUpdates() }); 
	$(window).resize( function() { scrollUpdates() });
});
