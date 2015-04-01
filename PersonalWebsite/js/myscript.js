$(function () {
    "use strict";
    
    var topoffset = 100; // Variable for the offset of the menu.

    // Activate Scrollspy, targeting Body
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });
    
    // Fire this event when the page is loaded, in case someone links directly to a reference link.
    var hash = $(this).find('li.active a').attr('href');

    if (hash !== '#main'){
        $('header nav').addClass('inBody');
    } else {
        $('header nav').removeClass('inBody');
    }

    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        // Looks for an active "li's" anchor, and stores for the "href" attribute in there.
        var hash = $(this).find('li.active a').attr('href');

        if (hash !== '#main'){
            $('header nav').addClass('inBody');
        } else {
            $('header nav').removeClass('inBody');
        }
    });
    
    $('.carousel').carousel({
      interval: false
    });
});