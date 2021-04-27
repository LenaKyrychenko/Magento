define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($){
    'use strict';

    $.widget('elogic.slider', {
        options:{
            template:"",
            slickOptions:{
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev" aria-label="Prev" type="button">Prev</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
            }
        },

        _create: function (){
            if(this.element.hasClass('slick-initialized')){
                this.element.slick('unslick');
            }
            $(this.options.template).show();
            $(this.options.template).slick(this.options.slickOptions);

        }
    });

    return $.elogic.slider;
});
