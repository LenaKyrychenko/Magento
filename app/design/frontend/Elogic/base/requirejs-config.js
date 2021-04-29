var config = {
    deps: [
        'js/theme'
    ],
    paths: {
        slick: 'Elogic_Slider/js/slick',
        'elogicSlider': 'js/elogic-slider',
        'elogicModalSubscription': 'js/modal-subscription',
        'elogicLanguageSlide': 'js/language-slide',
        'elogicAccordion': 'js/accordion',
        'selectMenu': 'js/jquery-ui-11',
        'elogicSelectMenu': 'js/elogic-select-menu'

    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
