/*
 * jquery-classes
 *
 * Copyright (c) 2014 Radko Dinev <radko.dinev@gmail.com> (https://github.com/radkodinev)
 * Licensed under the MIT license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.classes = function (classes) {
    var $elements = this;

    // get all the classes of the first element in the jQuery collection
    if (arguments.length === 0) {
      return $elements[0].className;
    }

    // ensure classes is a string
    if (typeof classes === 'string') {
      classes.split(/\s+/).forEach(function (item) {
        if (item.length === 0) {
          return;
        }

        var actionPrefix = item.charAt(0);
        var className = item.slice(1);

        switch (actionPrefix) {
          case '+':
            $elements.addClass(className);
            break;
          case '-':
            $elements.removeClass(className);
            break;
          case '~':
            $elements.toggleClass(className);
            break;

          default:
            throw new Error('Could not apply class change ["' + item + '"]');
        }
      });
    }

    return this;
  };
}));
