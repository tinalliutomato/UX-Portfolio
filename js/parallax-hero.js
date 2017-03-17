var $navSpacer = $('<div class="nav-spacer"></>');

$(document).ready(function() {
	var main = $('main');
	var nav = $('nav');
	var mainOrgTop = main.position().top;
	var navOrgTop = nav.position().top;

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        if (st >= mainOrgTop && !nav.hasClass("latched")) {
        	nav.addClass('latched');
        	nav.after($navSpacer);
        } else if (st < mainOrgTop) {
        	nav.removeClass('latched');
			$navSpacer.remove();
        }
    }); 

    $( "#navLogo" ).click(function() {
		nav.removeClass('latched');
		$navSpacer.remove();
	});
});