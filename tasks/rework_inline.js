/*
 * grunt-rework-inline
 * https://github.com/starandtina/grunt-rework-inline
 *
 * Copyright (c) 2014 starandtina
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var rework = require('rework');
  var inline = require('rework-plugin-inline');
  var fs = require('fs');
  var read = fs.readFileSync;
  var write = fs.writeFileSync;
  var exists = fs.existsSync;

  grunt.registerMultiTask('rework_inline', 'Replace your small images and fonts to Data URIs with Base64 encoding.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();
    var dirs = options.dirs;

    if (!dirs) {
      grunt.log.error('Please specify your images or fonts dirs.');
    }

    if (!Array.isArray(dirs)) {
      dirs = Array.prototype.slice.call(dirs);
    }

    // Iterate over all specified files
    this.filesSrc.filter(exists).forEach(function (file) {
      write(file, rework(read(file, 'utf8').trim())
        .use(inline(dirs))
        .toString()
      );
    });
  });
};