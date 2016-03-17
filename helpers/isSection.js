'use strict';

module.exports.register = function(handlebars, config) {
  config = config || {};

  /**
   * This helper can be used as a conditional to determine if you are in a particular section, it will detect
   * dependant on the sections rootName
   *
   * usage:
   * {{#isSection "AutoComplete"}}
   *  is AutoComplete
   * {{else}}
   *  is NOT AutoComplete
   * {{/isSection}}
   */
  handlebars.registerHelper('isSection', function(rootName, options) {
    if (options.data.root.rootName.toLowerCase() === rootName.toLowerCase()) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
};
