$(document).ready(function() {
    handleWindowScroll();
    handleNavigation();
});

function handleWindowScroll() {
    $(window).scroll(function() {
        /*Przyklejenie nawigacji*/
        var top = $(window).scrollTop();
        var find_class_small = $.contains('.nav-bar', '.small');

        if(top > 200 && find_class_small == false) {
            $('.nav-bar').addClass('small');
        }
        else {
            $('.nav-bar').removeClass('small');
        }
    });
}

function handleNavigation() {
    /*Rozwijanie mobilnej nawigacji*/
    $('.nav-bar-rwd .hamburger').click(function() {
        $('body').toggleClass('open');
    });

    /*Przewijanie do sekcji*/
    $('.nav-bar .link, .nav-bar-rwd .link, .headline-1 .link').click(function(event) {
        event.preventDefault();
        var anchor = $(this).attr('href');
        if($(anchor).length > 0) {
            var distanceFromTop = $(anchor).offset().top;
            $('body').removeClass('open');
            $('html, body').animate({
                scrollTop: distanceFromTop
            }, 500, function() {
                location.hash = anchor;
            });
        }
    });
}

function initMap() {
    'use strict';
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementsByClassName('contact-map')[0], {
        center: {lat: 50.055389, lng: 19.935309},
        scrollwheel: false,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false
    });

    google.maps.event.addListener(map, 'click', function(event){
        this.setOptions({scrollwheel: true});
    });
}