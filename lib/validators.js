(function (undefined) {

if (typeof(exports) === 'undefined') {
  var exports = {};
}
var regexps = exports.regexps = {
  url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
};

/**
 * @namespace Validators
 */
var validators = exports.validators = {
  // most of these are copied from the jquery validation plugin http://code.google.com/p/bassistance-plugins/source/browse/trunk/plugins/validate/jquery.validate.js

  /**
   * Make sure a value is not empty.
   */
  notEmpty: function notEmpty(value) {
    if (typeof(value) === 'string') {
      value = value.trim();
    }
    return (value && value !== true);
  },

  /**
   * Make sure a value is of at least a given length (params[0]) or is optional (params[1]) and empty
   */
  minLength: function minLength(value, params) {
    return (params[1] && !value) || ('' + value).trim().length >= params[0];
  },

  /**
   * Make sure a value is of at most a given length (params[0])
   */
  maxLength: function maxLength(value, params) {
    return ('' + value).trim().length <= params[0];
  },

  /**
   * Make sure a value is of at least a given value (params[0])  (pun intended :P ) or is optional (params[1]) and zero
   */
  min: function min(value, params) {
    return (params[1] && value === 0) || (+value) >= params[0];
  },

  /**
   * Make sure a value is of at most a given value (params[0])
   */
  max: function max(value, params) {
    return (+value) <= params[0];
  },

  /**
   * Make sure a value is a valid email adress or empty if it's optional (params[0])
   */
  email: function email(value, params) {
    return (!value && params[0]) || regexps.email.test(value);
  },

  /**
   * Make sure a value is a valid url or empty if it's optional (params[0])
   */
  url: function url(value, params) {
    return (!value && params[0]) || regexps.url.test(value);
  },

  /**
   * Make sure a value is a date that the Date object can feed on or is optional (params[0]) and empty
   */
  date: function date(value, params) {
    return (params[0] && !value) || !/Invalid|NaN/.test(new Date(value));
  },

  /**
   * Make sure a value is a valid ISO Date (YYYY-MM-DD) or is optional (params[0]) and empty
   */
  dateISO: function dateISO(value, params) {
    return (params[0] && !value) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
  },

  /**
   * Make sure a value is a valid US number (thousands seperator comma, decimal seperator point) string or is optional (params[0]) and empty
   */
  numberUS: function numberUS(value, params) {
    return (params[0] && !value) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
  },

  /**
   * Make sure a value is a valid EU number (thousands seperator point, decimal seperator comma) string or is optional (params[0]) and empty
   */
  numberEU: function numberEU(value, params) {
    return (params[0] && !value) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:\,\d+)?$/.test(value);
  },

  /**
   * Make sure a value is a valid SI number (thousands seperator space, decimal seperator point or comma) string or is optional (params[0]) and empty
   */
  numberSI: function numberSI(value, params) {
    return (params[0] && !value) || /^-?(?:\d+|\d{1,3}(?: \d{3})+)(?:[\,\.]\d+)?$/.test(value);
  },

  /**
   * Make sure a value is a valid (SI, US or EU) number string or is optional (params[0]) and empty
   */
  number: function number(value, params) {
    return (params[0] && !value) || validators.numberSI(value, []) || validators.numberUS(value, []) || validators.numberEU(value, []); // could add asian number formats. anyone? :D
  },

  /**
   * Please don't use this. Cast your property to an integer.
   *
   * The only valid use of this is a string of so many digits that an int can't hold it anymore. Why would you want to do that?
   */
  digits: function digits(value, params) {
    return (params[0] && !value) || /^\d+$/.test(value);
  },

  /**
   * Test if the value is alphanumeric or optional (params[0]) and empty
   */
  alphanumeric: function alphanumeric(value, params) {
    return (params[0] && !value) || /^[\w]+$/.test(value);
  }
}

if (typeof(window) !== 'undefined' && typeof(nohmValidationsNamespaceName) !== 'undefined') {
  window[nohmValidationsNamespaceName].nohmValidations = exports;
}

})();