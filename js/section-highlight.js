$(document).ready(function() {

    $sections = $('section');
    var $currentSection
    var lastScroll = 0;

    $(document).scroll(function(){
            /* get the current scroll position */
            var currentScroll  = $(document).scrollTop();

            var windowHeight = window.innerHeight;
            var half = windowHeight / 2;
            var fifth = windowHeight / 5;
            $sections.each(function(){
                    // divPosition is the position down the page in px of the current section we are testing      
                    var divPosition = $(this).offset().top;

                    if (currentScroll > lastScroll) {
                        if (divPosition - half < currentScroll ){
                            // We have either read the section or are currently reading the section so we'll call it our current section
                            $currentSection = $(this);
                            // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
                        }
                    } else {
                        if (divPosition - half < currentScroll ){
                            // We have either read the section or are currently reading the section so we'll call it our current section
                            $currentSection = $(this);
                            // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
                        }
                        
                    }

                    if ($currentSection) {
                        $sections.removeClass('active');
                        $currentSection.addClass('active');
                        if (currentScroll < half) {
                            $currentSection.removeClass('active');
                        }
                    }
            })

            lastScroll = currentScroll;
    });
 
});