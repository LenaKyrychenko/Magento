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

    $('body').on('click','.popup_custom_giftr .select-box',function () {
        $('.popup_custom_giftr .select-box__list').toggleClass("list-open");
        $('.popup_custom_giftr .select-box').toggleClass("rotate-arrow");
    });

});


