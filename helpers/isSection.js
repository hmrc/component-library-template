'use strict';

module.exports.register = function(handlebars, config) {
  config = config || {};

  handlebars.registerHelper('isSection', function(rootName, options) {
    if (options.data.root.rootName === rootName) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
};