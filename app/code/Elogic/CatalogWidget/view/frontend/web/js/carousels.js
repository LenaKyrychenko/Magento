define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($, events){
    'use strict';

    $.widget('elogic.carousel', {
        options:{
            slickOptions:{
                template: '',
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev" aria-label="Prev" type="button">Prev</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }
        },

        _create: function (){
            if($(this.options.slickOptions.template).hasClass('slick-initialized')){
                $(this.options.slickOptions.template).slick('unslick');
            }
            $(this.options.slickOptions.template).slick(this.options.slickOptions);
        }
    });

    return $.elogic.carousel;
});
