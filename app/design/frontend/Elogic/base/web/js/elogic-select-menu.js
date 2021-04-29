define([
    'jquery',
    'selectMenu'
], function ($){
    'use strict';

    $.widget('elogic.selectMenu', {
        options:{
            template:"",
            selectMenuOptions:{
                icons: { button: "ui-icon-caret-1-s" },
                position: { my : "left-100" },
                change: function( event, ui ) {
                    $(this).trigger('change');
                }
            }
        },

        _create: function (){
            var widgetElement = $(this.options.template);

            widgetElement.show();
            widgetElement.selectmenu(this.options.selectMenuOptions);
        }
    });

    return $.elogic.selectMenu;
});
