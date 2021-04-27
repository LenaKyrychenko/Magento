define([
    'jquery',
    'jquery-ui-modules/widget',
    'Magento_Ui/js/modal/modal'
], function ($){
    'use strict';

    $.widget('elogic.LanguageSlide', {
        options:{
            modalOptions:{
                type: 'slide',
                responsive: true,
                modalClass: 'language-slide',
                buttons: [
                    {
                        text: '',
                        class: 'language-slide-close',
                        click: function () {
                            this.closeModal();
                        }
                    }
                ]
            }
        },

        _create: function (){
            var contact = $('.contact-us');
            this._initModal(this.element);

            $(".btn-open-language-slider").on('click',function(){
                $(".language_slide_container").modal("openModal");
                contact.show();
            });
        },

        _initModal: function (element){
            element.modal(this.options.modalOptions);
        }

    });

    return $.elogic.LanguageSlide;
});
