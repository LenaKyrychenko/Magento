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
        'JQueryUi': 'js/jquery-ui-11',
        'elogicSelectMenu': 'js/elogic-select-menu',
        GiftPopup:  'js/modal-gift'

    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
    config: {
        mixins: {
            'Mirasvit_Giftr/js/item': {
                'js/item-mixin': true
            }
        }
    }
};
