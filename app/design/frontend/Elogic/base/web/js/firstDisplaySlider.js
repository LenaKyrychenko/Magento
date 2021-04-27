define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($, events){
    'use strict';

    $.widget('elogic.firstDisplaySlider', {
        options:{
            slickOptions:{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev" aria-label="Prev" type="button">Prev</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                dots: true
            }
        },

        _create: function (){
            if(this.element.hasClass('slick-initialized')){
                this.element.slick('unslick');
            }
            this.element.slick(this.options.slickOptions);
        }
    });

    return $.elogic.firstDisplaySlider;
});
