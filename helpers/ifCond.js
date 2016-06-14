'use strict';

module.exports.register = function(handlebars, config) {
  config = config || {};

  handlebars.registerHelper('ifCond', function(condition1, condition2, options) {
    if(condition1 === condition2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
};

