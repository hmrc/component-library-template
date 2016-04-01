'use strict';

module.exports.register = function(handlebars, config) {
  config = config || {};

  /**
   * This helper can be used as a conditional to determine if you are in a particular section, it will detect
   * dependant on the sections rootName.
   * NOTE: It will normalise the submitted rootName and the stored rootName to a lowercase version without spaces.
   *
   * usage:
   * {{#isSection "AutoComplete"}}
   *  is AutoComplete
   * {{else}}
   *  is NOT AutoComplete
   * {{/isSection}}
   */
  handlebars.registerHelper('isSection', function(rootName, options) {
    var normalise = function (string) {
      return string.replace(/\s/g, '').toLowerCase();
    }
    var sectionRootName = normalise(options.data.root.rootName);
    var rootName = normalise(rootName);

    if (sectionRootName === rootName) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
};
