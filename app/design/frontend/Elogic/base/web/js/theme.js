define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($) {
    'use strict';

    //
    // custom js
    //  ---------------------------------------------


    $(window).scroll(function () {
        if( $(window).scrollTop() > $('.page-header').height() && !($('.page-header').hasClass('sticky'))){
            $('.page-header').addClass('sticky');
        } else if ($(window).scrollTop() === 0){
            $('.page-header').removeClass('sticky');
        }
    });

    $(window).load(function() {
        $('.actions').show();
    });


});


