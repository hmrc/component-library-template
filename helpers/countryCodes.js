'use strict';

var fs = require('fs');

module.exports.register = function(handlebars, config) {
  config = config || {};

  handlebars.registerPartial('countryCodes', function () {
    var html = fs.readFileSync(__dirname + '/../partials/countryCodes.html', 'utf8');
    return html;
  });
};
