define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'JQueryUi',
    'domReady!'
], function($, modal) {
    'use strict';
    $.widget('mage.customgiftr', {

        options : {
            modalConfig:{
                'type': 'popup',
                'modalClass': 'popup_custom_giftr',
                'responsive': true,
                'buttons': [],
            },
            modalWindow: null
        },

        _create: function () {
            this._on('.giftr-link', {
                click: this._clickHandler
            });
        },

        _clickHandler: function (event){
            event.preventDefault();

            if (!this.options.modalWindow){
                this.createPopUp(this.element);
            }

            this.showModal();

        },

        createPopUp: function (element){
            this.options.modalWindow = element;
            modal(this.options.modalConfig, $(this.options.modalWindow));
        },

        showModal: function () {
            $(this.options.modalWindow).modal('openModal').trigger('contentUpdated');
        }

    })
    return $.mage.customgiftr;

});
