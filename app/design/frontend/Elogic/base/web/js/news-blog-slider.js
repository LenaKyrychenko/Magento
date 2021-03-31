define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($, events){
    'use strict';

    $.widget('elogic.newsAndBlogSlider', {
        options:{
            slickOptions:{
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                prevArrow: '<button class="slick-prev" aria-label="Prev" type="button">Prev</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
            }
        },

        _create: function (){
            if(this.element.hasClass('slick-initialized')){
                this.element.slick('unslick');
            }
            this.element.slick(this.options.slickOptions);
        }
    });

    return $.elogic.newsAndBlogSlider;
});
