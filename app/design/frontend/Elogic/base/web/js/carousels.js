define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($, events){
    'use strict';

    $.widget('elogic.carousel', {
        options:{
            slickOptions:{
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },

        _create: function (){
            if(this.element.hasClass('slick-initialized')){
                this.element.slick('unslick');
            }
            this.element.slick(this.options.slickOptions);
        }
    });

    return $.elogic.carousel;
});
