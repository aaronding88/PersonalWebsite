$(function () {
    "use strict";
    
    var topoffset = 50; // Variable for the offset of the menu.
    var slideqty = $('#main .item').length;
    var wheight = $(window).height(); // Gets the height of the window.
    
    $('.fullheight').css('height', wheight);
    
    // replaces IMG inside carousels with a background image
    // Credit to: Ray Villalobos, Lynda.com
    
    $('#main .item img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
    });
    
    // Adjust height of .fullheight elements on window resize. Resize activates when it registers a change in size.
    // Credit to: Ray Villalobos, Lynda.com
    $(window).resize(function() {
        wheight = $(window).height(); // Regrabs the window height.
        $('.fullheight').css('height', wheight); //Applies that window height.
    });
    
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
    
    /* When the NavBar hits About Me, add a function to a class.
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        // Looks for an active "li's" anchor, and stores for the "href" attribute in there.
        var hash = $(this).find('li.active a').attr('href');

        if (hash === '#aboutMe'){
            $('#about-me-banner').addClass('description-text');
        } else {
            $('#about-me-banner').removeClass('description-text');
        }
    }); /*
    
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