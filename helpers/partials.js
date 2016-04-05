'use strict';

var PARTIALS_FOLDER = __dirname + '/../partials/';
var fs = require('fs');


/**
 * This method will automatically register a partial with the filename of the partial as the handlebars partial name
 * @param handlebars
 * @param config
 */
module.exports.register = function(handlebars, config) {
  config = config || {};

  var partials = {};
  fs.readdir(PARTIALS_FOLDER, function (err, files) {

    if (err) {
      return err;
    }

    files.map(function (fileName) {
      var partialName = fileName.split('.')[0];
      var html = fs.readFileSync(PARTIALS_FOLDER + fileName, 'utf8');
      partials[partialName] = html;
    });

    handlebars.registerPartial(partials);
  });
};
