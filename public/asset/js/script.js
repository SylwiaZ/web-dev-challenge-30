function initMap() {
    'use strict';
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementsByClassName('contact-map')[0], {
        center: {lat: 50.055389, lng: 19.935309},
        scrollwheel: true,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false
    });
}

$(document).ready(function(){
    
    $('.nav-bar-rwd .hamburger').click(function() {
        $(this).parents('.nav-bar-rwd').toggleClass('open');
    })
    
}); 
                  
                  