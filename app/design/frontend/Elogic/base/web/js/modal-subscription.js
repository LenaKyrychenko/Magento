define([
    'jquery',
    'jquery-ui-modules/widget',
    'Magento_Ui/js/modal/modal',
    'mage/cookies'
], function ($){
    'use strict';

    $.widget('elogic.ModalSubscription', {
        options:{
            isCustomerSubscribed: '',
            checkBox: '',
            modalOptions:{
                type: 'popup',
                responsive: true,
                modalClass: 'modal-popup-sub',
                buttons: [{
                    text: '',
                    class: 'modal-subscription-close',
                    click: function () {
                        this.closeModal();
                    }
                }],
                opened: function($Event) {
                    $(".modal-footer").hide();
                }
            }
        },

        _create: function (){
            var isSubscribed = this.options.isCustomerSubscribed;
            if(!isSubscribed) {

                var modalCheckShow = $(this.options.checkBox);
                var element = this.element;

                this._checkCookies('dontShowAgain', element);

                modalCheckShow.on('click', function () {
                    this._checkboxIsChecked(modalCheckShow, 'dontShowAgain', true, 30);
                }.bind(this));

            }
        },

        _destroy: function (){
            var modalCheckShow = $(this.options.checkBox);
            modalCheckShow.off();
        },

        _checkboxIsChecked: function (checkbox, name, value, time){
            if(checkbox.is(':checked')){
                this._setCookies(name, value, time);
            } else {
                this._setCookies(name, !value, time);
            }
        },

        _setCookies: function (name, value, time){
            $.cookie(name, value, { expires: time });
        },

        _checkCookies: function (name, element){
            if($.cookie(name)){
                if($.cookie(name) === false){
                    this._initModal(element);
                }
            } else {
                this._initModal(element);
            }
        },

        _initModal: function (element){
            element.modal(this.options.modalOptions);
        }

    });

    return $.elogic.ModalSubscription;
});


