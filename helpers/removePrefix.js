'use strict';

module.exports.register = function(handlebars, config) {
  config = config || {};

  /**
   * This removes the "Deprecated:" or "Experimental:" flags from the items description
   */
  handlebars.registerHelper('removePrefix', function(options) {
    this.description = this.description.replace(/(Deprecated:|Experimental:)\s?/g, '');
    return options.fn(this);
  });
};
