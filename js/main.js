$(document).ready(function() {
	// fade modal window
// 	$('a.open-modal').click(function(event) {
// 	$(this).modal({
// 		fadeDuration: 250
// 	});
// 	return false;
// });


	let $button = $('#nav-toggle'), 
		$nav = $('#navigation'),
		navToggleClassName = 'navigation-holder--mobile-open',
		textOpen = 'Open nav',
		textClose = 'Close nav';

	$button.on('click',function(e) {
		/* Act on the event */
		e.preventDefault();
		
		if ($nav.hasClass(navToggleClassName)) {
			$nav.fadeOut();
			setTimeout( function(){
			$nav.removeClass(navToggleClassName).hide();

			}, 500)
			$(this).text(textOpen);
			

		}	
		else
		{
			$nav.hide().addClass(navToggleClassName).fadeIn();
			$(this).text(textClose);
		}
	});		
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       150,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

