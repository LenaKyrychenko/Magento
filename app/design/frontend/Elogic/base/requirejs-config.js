var config = {
    deps: [
        'js/theme'
    ],
    paths: {
        slick: 'Elogic_Slider/js/slick',
        'elogicSlider': 'js/elogic-slider',
        'elogicModalSubscription': 'js/modal-subscription',
        'elogicLanguageSlide': 'js/language-slide',
        'elogicAccordion': 'js/accordion'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
