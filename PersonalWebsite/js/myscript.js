$(function () {
    "use strict";
    
    var topoffset = 50; // Variable for the offset of the menu.
    var slideqty = $('#main .item').length;
    
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
    
    // Everytime the navbar activates the scrollspy, perform this function. 
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        // Looks for an active "li's" anchor, and stores for the "href" attribute in there.
        var hash = $(this).find('li.active a').attr('href');

        if (hash !== '#main'){
            $('header nav').addClass('inBody');
        } else {
            $('header nav').removeClass('inBody');
        }
    });
    
    //Automatically generate carousel indicators
    /* Credit to: Ray Villalobos, Lynda.com */
    for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#main" data-slide-to="' + i + '"></li>';
    $('#main ol').append(insertText);
  }
    
    // Settings for the carousel.
    $('.carousel').carousel({
      interval: false
    });
    
    //Use smooth scrolling when clicking on navigation
    /* Credit to: Ray Villalobos, Lynda.com */
    $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        // Animation section.
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});