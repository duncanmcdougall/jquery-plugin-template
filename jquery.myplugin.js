/*!
 * jquery.myplugin.js
 * Copyright 2013 Me and other contributors; Licensed MIT
 */
; (function ($) {

    'use strict';

    var MyPlugin = function (el, opts) {
        var options = opts;
        var element = el;

        var bindEvents = function () {
            // click events etc
        };

        var init = function () {
            // call your functions in here
            bindEvents();
        };

        init();
    };

    $.fn.myplugin = function (options) {
        if ($(this).length === 0) {
            return false;
        }

        var opts = $.extend({}, $.fn.myplugin.defaults, options);

        return this.each(function () {
            return new MyPlugin($(this), opts);
        });
    };

    $.fn.myplugin.defaults = {
        option_a: true,
        option_b: 500
    };


})($);