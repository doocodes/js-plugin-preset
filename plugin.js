/*!
 * jQuery preset plugin
 * Author: Docodes <milos@themelaboratory.com>
 * Licensed under the MIT license
 */
;(function ($, window, document, undefined) {
    'use strict';
   
        // Check if namespace has already been initialized
        if (!$.namespace) {
            $.namespace = {};
        };


        /**
         * Real magic happends here :D
         * @param elements
         * @param options
         */
        $.namespace.plugin = function (elements, options) {

        };

        // Extend the $.fn object
        $.fn.namespace_plugin = function (options) {

            // Merge the passed in options with the default options
            options = $.extend({}, $.fn.namespace_plugin.options, options);

            return this.each(function () {
                (new $.namespace.plugin(this, options));
            });
        };
    

    // Default options specified by the developer
    $.fn.namespace_plugin.options = {

    };
})(jQuery, window, document);
