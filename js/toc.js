$(document).ready(function() {
	/* Store the original positions */
	 var toc = $('.toc');	 
	 var tocOrigTop = toc.position().top;

	/* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        var st = $(window).scrollTop();
        /* change classes based on section positions */
        if (st >= 100) {
        	toc.addClass('latched');
        } else {
        	toc.removeClass('latched');
        }
        
    }); 
});