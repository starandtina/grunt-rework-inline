# grunt-rework-inline

[![Build Status](https://travis-ci.org/starandtina/grunt-rework-inline.svg)](https://travis-ci.org/starandtina/grunt-rework-inline)

> Replace your small images and fonts to Data URIs with Base64 encoding.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rework-inline --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rework-inline');
```

## The "rework_inline" task

### Overview
In your project's Gruntfile, add a section named `rework_inline` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rework_inline: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.dirs
Type: `String` or `Array`
Default value: `null`

A string or array value that is used to specify the inline files from `dir` directly.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  rework_inline: {
    default_options: {
      options: {
        dirs: ['test/fixtures']
      },
      src: ['test/fixtures/inline.css']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2014-11-21   v0.1.0   first commit.
