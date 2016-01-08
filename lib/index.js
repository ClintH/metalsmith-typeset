'use strict';

var debug = require('debug')('metalsmith-typography');
var extname = require('path').extname;
var typeset = require('typeset');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to enhance typography in HTML.
 *
 * @param {Object} options (optional)
 *   @property {String} lang
 *   @property {Array}  rules
 * @return {Function}
 */

function plugin(options){
  options = options || {};

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!isHtml(file)) return;
      var data = files[file];
      debug('typsetting file: %s', file);
      var str = typeset(data.contents.toString(), options);
      data.contents = new Buffer(str);
      files[file] = data;
    });
  };
}

/**
 * Check if a `file` is HTML.
 *
 * @param {String} file
 * @return {Boolean}
 */

function isHtml(file){
  return /\.html?/.test(extname(file));
}
