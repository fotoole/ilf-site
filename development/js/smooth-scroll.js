/* smooth scroll works on any anchor tag with the smooth-scroll class*/
$('a.smooth-scroll').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var jQuerytarget = $(this.hash);
			jQuerytarget = jQuerytarget.length && jQuerytarget || $('[name=' + this.hash.slice(1) + ']');
				if (jQuerytarget.length) {
					var fixedHeaderHeight = 225,
					scrollSpeed = 400,
					targetOffset = jQuerytarget.offset().top - fixedHeaderHeight;
             $('html,body').animate({
             	scrollTop: targetOffset
             }, scrollSpeed, 'swing');
             return false;
         }
  }
});
