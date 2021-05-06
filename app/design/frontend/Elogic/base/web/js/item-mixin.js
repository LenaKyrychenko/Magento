define(['jquery'],function ($) {
    'use strict';

    var mixin = {

        addProduct: function() {
            if (!$('#product_addtocart_form').valid()) {
                return false;
            }

            $.ajax({
                url: this.url,
                method: 'POST',
                data: this.getData(),
                dataType: 'json',
                showLoader: true,
                success: function (response) {
                    var giftr = $('[data-block="addtogiftr"]');
                    $('.giftr-dropdown').hide();
                    if (response.status === this.login) {
                        setLocation(response.message);
                    }
                }
            });
        }

    };

    return function (target) {
        return target.extend(mixin);
    };
});
