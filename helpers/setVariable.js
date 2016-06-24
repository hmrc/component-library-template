'use strict';

module.exports.register = function(handlebars, config) {
  config = config || {};

  handlebars.registerHelper('setSectionData', function(key, value, options) {
    var rootName = options.data.root.rootName;
    var section = options.data.root.styleguide.section(rootName + '.*');

    section[0].data[key] = value;
  });
};
